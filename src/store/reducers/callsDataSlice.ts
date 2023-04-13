import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, IRootState } from '../store';
import { ICalls, ICallsData } from '../types';
import { createUrl } from '../../services/fetch';
import { iFilters } from './callsFiltersSlice';

interface initialStateTypes {
  data: ICalls[] | null;
  totalRows: number | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}

const initialState = {
  data: null,
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCallsData.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    });
    builder.addCase(getCallsData.fulfilled, (state, { payload }: PayloadAction<ICallsData>) => {
      state.data = payload.results;
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

export default callsDataSlice.reducer;
