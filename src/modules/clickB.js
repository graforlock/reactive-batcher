// @flow

import * as most from 'most';

import Converter from '../services/Converter';

const clickB$ = most.fromEvent('click', document.querySelector('#incrB'))
  .map(Converter.clickB);

export default clickB$;
