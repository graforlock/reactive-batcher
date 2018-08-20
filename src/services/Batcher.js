// @flow

import type { Bucket } from '../types';
import { Events } from '../enums';

class Batcher {
  static emptyBucket (time: number, id: string): Bucket {
      return { bucket: { size: 0 }, time, id };
  }
 
  static startBatching () {
     const init = new Event(Events.START_BATCHING);
     window.dispatchEvent(init);
   }
 }

 export default Batcher;
 