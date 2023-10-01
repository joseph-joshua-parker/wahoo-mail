import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipientInputComponent } from './components/recipient-input/recipient-input.component';
import { ContactsService } from './services/Contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipientInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
