import { createAction, props } from '@ngrx/store';
import { AddressEntry } from '../models/address-entry';

export const CREATE_ADDRESS_ENTRY = '[Address Entry] Create';
export const UPDATE_ADDRESS_ENTRY = '[Address Entry] Update';
export const SORT_ADDRESS_ENTRIES = '[Address Entry] Sorted Address Entries';
export const FILTER_ADDRESS_ENTRIES = '[Address Entry] Filter Address Entries'; 

export const createAddressEntry = createAction(
    CREATE_ADDRESS_ENTRY,
    props<{ payload: AddressEntry }>()
);

export const sortAddressEntries = createAction(
    SORT_ADDRESS_ENTRIES
);

export const filterAddressEntries = createAction(
    FILTER_ADDRESS_ENTRIES,
    props<{ searchQuery }>()
);