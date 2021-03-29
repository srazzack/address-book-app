import { Component } from '@angular/core';
import { AddressBookService } from './address-book.service';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { createAddressEntry, filterAddressEntries } from './actions/address-entry.actions';
import { AddressBookAppState } from './address-book-app.state';
import { filter } from 'rxjs/operators';
import { AddressEntry } from './models/address-entry';


@Component({
  selector: 'address-book-app',
  templateUrl: './address-book-app.component.html',
  styleUrls: [ './address-book-app.css' ]
})
export class AddressBookAppComponent  {
   public addressEntries$ = this.store.pipe(select('addressEntries'));
   public searchQuery: string;
  constructor(
    private AddressBookService: AddressBookService,
    private store: Store<AddressBookAppState>,
  ) {}

  public sortAddressBookEntries() {

  }

  public selectCell() {

  }

  public selectColumn() {

  }

  public selectRow() {

  }

  public editCell() {

  }

  public sortColumnAlphabetically() {

  }

  public selectAllRows() {

  }

  public deleteSelectedRows() {

  }

  public updateChangedRows() {

  }

  public deleteRow() {

  }

  private generateUniqueId() {

  }

}
