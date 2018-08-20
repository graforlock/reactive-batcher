// @flow

import * as most from 'most';

import Converter from '../services/Converter';

const mousemove$ = most.fromEvent('mousemove', window)
  .throttle(100)
  .map(Converter.mousemove);

export default mousemove$;
