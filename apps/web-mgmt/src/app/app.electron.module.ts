import { NgModule } from '@angular/core';
import { Freshnx12ElectronCoreModule } from '@freshnx12/xplat/electron/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, Freshnx12ElectronCoreModule],
  bootstrap: [AppComponent],
})
export class AppElectronModule {}
