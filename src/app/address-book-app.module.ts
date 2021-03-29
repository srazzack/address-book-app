import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AddressBookAppComponent } from './address-book-app.component';
import { MatTableModule } from '@angular/material/table';
import { AddressBookService } from './address-book.service';
import { StoreModule } from '@ngrx/store';
import { addressBookReducer } from './reducers/address-book.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatTableModule, StoreModule.forRoot({ addressEntries: addressBookReducer }), StoreDevtoolsModule.instrument({ maxAge: 25 }), EffectsModule.forRoot([]) ],
  declarations: [ AddressBookAppComponent ],
  bootstrap:    [ AddressBookAppComponent ],
  providers: [ AddressBookService ],
})
export class AppModule { }
