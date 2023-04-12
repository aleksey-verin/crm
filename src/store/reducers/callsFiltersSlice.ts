import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../store';

interface initialStateTypes {
  date_start: string;
  date_end: string;
  offset: number;
  search: string;
  byInOutCalls: string;
  byTypeCalls: string;
  byPerson_id: string;
  bySource: string;
  byErrors: string;
}

const initialState = {
  date_start: '',
  date_end: '',
  offset: 0,
  search: '',
  byInOutCalls: '',
  byTypeCalls: '',
  byPerson_id: '',
  bySource: '',
  byErrors: ''
};

export const callsFiltersSlice = createSlice({
  name: 'callsFiltersSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    // addDataForRequestCounter: (state) => {
    //   state.requestCounter = state.requestCounter + 1;
    // },
    // addDataForTopOneCity: (state, action) => {
    //   state.dataForTopOneCity = countDataForTopOneCity(state.dataForTopOneCity, action.payload);
    //   state.topOneCity = findTopOneCity(state.dataForTopOneCity);
    // }
  }
});

export const selectorStatistics = (state: IRootState) => state.callsFiltersSlice;

export const { addDataForRequestCounter, addDataForTopOneCity } = callsFiltersSlice.actions;

export default callsFiltersSlice.reducer;
