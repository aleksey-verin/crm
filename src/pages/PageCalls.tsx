import React, { useEffect } from 'react';
import Info from '../components/pageCalls/Info';
import Filtering from '../components/pageCalls/Filtering';
import SpreadSheet from '../components/pageCalls/SpreadSheet';
import { useSelector } from 'react-redux';
import { clearData, getCallsData, selectorCallsDataSlice } from '../store/reducers/callsDataSlice';
import { resetAllFilters, selectorCallsFilters } from '../store/reducers/callsFiltersSlice';
import { useAppDispatch } from '../store/store';
import { setOffset } from '../store/reducers/callsFiltersSlice';

const PageCalls = () => {
  const dispatch = useAppDispatch();
  const { totalRows, isLoading } = useSelector(selectorCallsDataSlice);
  const {
    filters,
    filters: { date_start, offset }
  } = useSelector(selectorCallsFilters);

  useEffect(() => {
    if (!date_start) return;
    dispatch(getCallsData(filters));
  }, [filters]);

  useEffect(() => {
    return () => {
      console.log('clear');
      dispatch(clearData());
      dispatch(resetAllFilters());
    };
  }, []);

  useEffect(() => {
    const onScroll = (e: any) => {
      if (e.target.documentElement && totalRows) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 50 && totalRows > offset + 50) {
          if (!isLoading) {
            dispatch(setOffset());
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

  return (
    <main>
      <Info />
      <Filtering />
      <SpreadSheet />
    </main>
  );
};

export default PageCalls;
