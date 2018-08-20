// @flow

import type { Bucket, HubConnection } from '../types';
import { HubConnectionBuilder } from '@aspnet/signalr';

class Postman {
  connection: HubConnection;

  constructor (url: string) {
    this.connection = new HubConnectionBuilder()
      .withUrl(url)
      .build()
      .start();
  }

  sendBucket(bucket: Bucket) {
    this.connection.invoke("SendMessage", bucket).catch((err) => {
      return console.error(err.toString());
    });
  }
}

export default Postman;
