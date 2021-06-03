import { environmentBase } from './environment.base';
import { IEnvironment } from '@freshnx12/xplat/core';
import { environmentProd } from '@freshnx12/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});