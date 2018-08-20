// @flow

import * as most from 'most';

import Converter from '../services/Converter';

const clickA$ = most.fromEvent('click', document.querySelector('#incrA'))
  .map(Converter.clickA);

export default clickA$;
