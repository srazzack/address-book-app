import { createAddressEntry, filterAddressEntries } from '../actions/address-entry.actions';
import { createReducer, on } from '@ngrx/store';
import { AddressEntry } from '../models/address-entry';

const initialAddressEntries: AddressEntry[] = [
  {
    select: '[]',
    id: '0000',
    name: 'John Smith',
    location: 'Palo Alto', // string for now; can use a Geo location timestamp
    office: 'C-103',
    phone: {
      cellular: '650-353-1239',
      office: 'x55778',
    }
  }
];

export const addressBookReducer = createReducer<AddressEntry[]>(initialAddressEntries,
  on(createAddressEntry, (state, action) => {
    console.log(state);
    console.log(action);
    console.log([...state, action.payload ]);
    return [...state, action.payload ];
  }),
  // on(createAddressEntry, (state, action) => {}),
  // on(filterAddressEntries, (state, action) => {})
);
