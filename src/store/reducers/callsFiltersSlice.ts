import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';

interface initialStateTypes {
  date_start: string | null;
  date_end: string | null;
  offset: number;
  search: string | null;
  byInOutCalls: string | null;
  byTypeCalls: string | null;
  byPerson_id: string | null;
  bySource: string | null;
  byErrors: string | null;
  pagination: number;
}

const initialState = {
  date_start: null,
  date_end: null,
  offset: 0,
  search: null,
  byInOutCalls: null,
  byTypeCalls: null,
  byPerson_id: null,
  bySource: null,
  byErrors: null,
  pagination: 50
};

export const callsFiltersSlice = createSlice({
  name: 'callsFiltersSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    setDateStart: (state, action) => {
      state.date_start = action.payload;
    },
    setDateEnd: (state, action) => {
      state.date_end = action.payload;
    },
    setOffset: (state) => {
      state.offset = state.offset + state.pagination;
    },
    resetOffset: (state) => {
      state.offset = initialState.offset;
    }
    // addDataForTopOneCity: (state, action) => {
    //   state.dataForTopOneCity = countDataForTopOneCity(state.dataForTopOneCity, action.payload);
    //   state.topOneCity = findTopOneCity(state.dataForTopOneCity);
    // }
  }
});

export const selectorCallsFilters = (state: IRootState) => state.callsFiltersSlice;

export const { setDateStart, setDateEnd, setOffset, resetOffset } = callsFiltersSlice.actions;

export default callsFiltersSlice.reducer;
