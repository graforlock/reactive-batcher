// @flow

import * as most from 'most';

export interface Time {
  time: number;
}

export const checkOvertime = (event: Time, overtime: number = 3000) => Date.now() - event.time >= overtime;

export const periodic$ = most.timestamp(most.periodic(100));
