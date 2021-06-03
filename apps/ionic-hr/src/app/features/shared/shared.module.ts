import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@freshnx12/xplat/ionic/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
