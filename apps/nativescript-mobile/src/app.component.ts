import { Component } from '@angular/core';
import { AppService } from '@freshnx12/xplat/nativescript/core';
import { AppBaseComponent } from '@freshnx12/xplat/nativescript/features';

@Component({
  selector: 'freshnx12-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
