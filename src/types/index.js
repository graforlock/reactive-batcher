// @flow

import { Time } from '../utils/time';

export type Bucket = {
  bucket: {
    [string]: Array<Object>;
    size: number;
  };
  id: string;
  time: number;
  [string]: Array<Object>;
} & Time

export type Batch = {
  type: string;
  payload: Array<Object>;
}

export type HubConnection = {
  ...Promise<any>;
  invoke: (name: string, ...args: any[]) => Promise<any>;
}