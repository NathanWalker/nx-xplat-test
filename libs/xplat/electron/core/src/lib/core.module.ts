import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@freshnx12/xplat/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS],
})
export class Freshnx12ElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: Freshnx12ElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'Freshnx12ElectronCoreModule');
  }
}
