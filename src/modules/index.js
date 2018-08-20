// @flow

import * as most from 'most';

import clickA from './clickA'; 
import clickB from './clickB';
import mousemove from './mousemove';

const modules$ = most.mergeArray([clickA, clickB, mousemove]);

export default modules$;
