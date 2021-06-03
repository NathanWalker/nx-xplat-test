import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@freshnx12/xplat/utils';
import { Freshnx12CoreModule } from '@freshnx12/xplat/web/core';

@NgModule({
  imports: [Freshnx12CoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class Freshnx12IonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: Freshnx12IonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'Freshnx12IonicCoreModule');
  }
}
