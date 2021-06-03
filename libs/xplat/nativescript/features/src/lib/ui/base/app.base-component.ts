import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@freshnx12/xplat/core';
import { AppService } from '@freshnx12/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
