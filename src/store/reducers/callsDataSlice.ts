import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, IRootState } from '../store';
import { ICalls, ICallsData, IEmployees } from '../types';
import { createUrl } from '../../services/fetch';
import { iFilters } from './callsFiltersSlice';
import { getEmployeesFromData, getEmployeesList } from '../../services/helpers';
import { filtersValues, menuItemTypes } from '../../services/constants';

interface initialStateTypes {
  data: ICalls[];
  employees: IEmployees[] | null;
  menuEmployees: menuItemTypes[];
  totalRows: number | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState = {
  data: [],
  employees: null,
  menuEmployees: [],
  totalRows: null,
  isLoading: false,
  isSuccess: false,
  isError: false
};

export const getCallsData = createAsyncThunk<
  ICallsData, // return type
  iFilters, // args type
  {
    dispatch: AppDispatch;
    state: IRootState; // thunkAPI type
  }
>('getCallsData', async (params, thunkAPI) => {
  const url = createUrl(params);
  const _token = 'testtoken';
  const headersList = {
    Accept: '*/*',
    Authorization: `Bearer ${_token}`
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headersList
    });
    if (response.ok) {
      return await response.json();
    } else {
      const error = await response.json();
      return thunkAPI.rejectWithValue(error.message);
    }
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const callsDataSlice = createSlice({
  name: 'callsDataSlice',
  initialState: initialState as initialStateTypes,
  reducers: {
    clearData: (state) => {
      console.log('clear data');
      state.data = initialState.data;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCallsData.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getCallsData.fulfilled, (state, { payload }: PayloadAction<ICallsData>) => {
      const employeesList = getEmployeesFromData(payload.results);
      state.data = [...state.data, ...payload.results];
      state.employees = employeesList;
      state.menuEmployees = getEmployeesList(filtersValues.personCalls, employeesList);
      state.totalRows = Number(payload.total_rows);
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getCallsData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const selectorCallsDataSlice = (state: IRootState) => state.callsDataSlice;

export const { clearData } = callsDataSlice.actions;

export default callsDataSlice.reducer;
