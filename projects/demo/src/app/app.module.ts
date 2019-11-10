import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookButtonsModule } from '../../../ngx-facebook-buttons/src/public_api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FacebookButtonsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
