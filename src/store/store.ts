import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import callsDataSlice from './reducers/callsDataSlice';
import callsFiltersSlice from './reducers/callsFiltersSlice';

export const rootReducer = combineReducers({ callsDataSlice, callsFiltersSlice });

export const store = configureStore({
  reducer: rootReducer
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   })
});

store.subscribe(() => {
  // storageSetItem(storage.weatherStats, store.getState().statisticsSlice);
  // storageSetItem(storage.weatherFavoriteList, store.getState().favoriteCitiesSlice);
  // storageSetItem(storage.weatherCurrentCity, store.getState().currentWeatherSlice.currentCity);
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
