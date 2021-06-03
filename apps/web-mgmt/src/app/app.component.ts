import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@freshnx12/xplat/web/features';

@Component({
  selector: 'freshnx12-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
