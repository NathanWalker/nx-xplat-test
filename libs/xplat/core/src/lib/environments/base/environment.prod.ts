import { IEnvironment } from '@freshnx12/xplat/core';
import { deepMerge } from '@freshnx12/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
