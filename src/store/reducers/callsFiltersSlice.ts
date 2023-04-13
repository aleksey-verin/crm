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
    setFilterInOutCalls: (state, action) => {
      state.filters.in_out = action.payload;
    },
    setFilterSearch: (state, action) => {
      state.filters.search = action.payload;
    }
  }
});

export const selectorCallsFilters = (state: IRootState) => state.callsFiltersSlice;

export const {
  setFilterDateStart,
  setFilterDateEnd,
  setOffset,
  resetOffset,
  setFilterInOutCalls,
  setFilterSearch
} = callsFiltersSlice.actions;

export default callsFiltersSlice.reducer;
