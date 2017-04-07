import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RealtorProfileComponent } from './realtor-profile/realtor-profile.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtorProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
