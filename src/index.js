// @flow

import type { Batch, Bucket } from './types';

import * as most from 'most';

import { Events } from './enums';
import Batcher from './services/Batcher';
import Converter from './services/Converter';
import Postman from './services/Postman';

import modules$ from './modules';

import * as math from './utils/math';
import * as time from './utils/time';
import { Time } from './utils/time';

const postman = new Postman("http://localhost:5000/chatHub");

const start$ = most.fromEvent(Events.START_BATCHING, window);

const start$$ = most.timestamp(start$)
  .map(({time}) => {
    return modules$
      .scan((acc: Bucket, batch: any): Bucket => {
        acc.bucket[batch.type] = acc.bucket[batch.type] || [];
        acc.bucket[batch.type].push(batch.payload);
        ++acc.bucket.size;
        return acc;
    }, Batcher.emptyBucket(time, math.uniqueId()));
  });

most
  .switchLatest(start$$)
  .combine((...streams) => streams, time.periodic$)
  .filter(([event]): boolean => {
    if(!event.bucket.size) {
      if(time.checkOvertime(event)) Batcher.startBatching();
      return false;
    }
    if(event.bucket.size % 100 === 0) return true;
    if(time.checkOvertime(event)) {
      Batcher.startBatching();
      return true;
    }

    return false;
  })
  .skipRepeatsWith(([prev], [next]) => prev.id === next.id)
  .observe(([bucket]) => {
    Batcher.startBatching();
    postman.sendBucket(bucket);
  });
