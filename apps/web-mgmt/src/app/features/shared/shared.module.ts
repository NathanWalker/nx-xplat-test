import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@freshnx12/xplat/web/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
