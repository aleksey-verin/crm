import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';

export interface iFilters {
  date_start: string;
  date_end: string;
  offset: number;
  search: string;
  in_out: string;
  from_type: string;
  from_persons: string;
  sources: string;
  errors: string;
}
interface initialStateTypes {
  filters: iFilters;
  pagination: number;
}

const initialState = {
  filters: {
    date_start: '',
    date_end: '',
    offset: 0,
    search: '',
    in_out: '',
    from_type: '',
    from_persons: '',
    sources: '',
    errors: ''
  },
  pagination: 50
};

export const callsFiltersSlice = createSlice({
  name: 'callsFiltersSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    setFilterDateStart: (state, action) => {
      state.filters.date_start = action.payload;
    },
    setFilterDateEnd: (state, action) => {
      state.filters.date_end = action.payload;
    },
    setOffset: (state) => {
      state.filters.offset = state.filters.offset + state.pagination;
    },
    resetOffset: (state) => {
      state.filters.offset = initialState.filters.offset;
    },
    setFilterSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    setFilterInOutCalls: (state, action) => {
      state.filters.in_out = action.payload;
    },
    setFilterTypeCall: (state, action) => {
      state.filters.from_type = action.payload;
    },
    setFilterPerson: (state, action) => {
      state.filters.from_persons = action.payload;
    },
    setFilterSource: (state, action) => {
      state.filters.sources = action.payload;
    },
    setFilterErrors: (state, action) => {
      state.filters.errors = action.payload;
    },
    resetAllFilters: (state) => {
      state.filters.offset = initialState.filters.offset;
      state.filters.search = initialState.filters.search;
      state.filters.in_out = initialState.filters.in_out;
      state.filters.from_type = initialState.filters.from_type;
      state.filters.from_persons = initialState.filters.from_persons;
      state.filters.sources = initialState.filters.sources;
      state.filters.errors = initialState.filters.errors;
    }
  }
});

export const selectorCallsFilters = (state: IRootState) => state.callsFiltersSlice;

export const {
  setFilterDateStart,
  setFilterDateEnd,
  setOffset,
  resetOffset,
  setFilterSearch,
  setFilterInOutCalls,
  setFilterTypeCall,
  setFilterPerson,
  setFilterSource,
  setFilterErrors,
  resetAllFilters
} = callsFiltersSlice.actions;

export default callsFiltersSlice.reducer;
