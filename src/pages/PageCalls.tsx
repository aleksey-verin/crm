import React, { useEffect } from 'react';
import Info from '../components/pageCalls/Info';
import Filtering from '../components/pageCalls/Filtering';
import { useSelector } from 'react-redux';
import { selectorCallsFilters } from '../store/reducers/callsFiltersSlice';
import { useAppDispatch } from '../store/store';
import { getCallsData } from '../store/reducers/callsDataSlice';
import SpreadSheet from '../components/pageCalls/SpreadSheet';

const PageCalls = () => {
  const dispatch = useAppDispatch();
  const { filters } = useSelector(selectorCallsFilters);

  // useEffect(() => {
  //   if (date_start || date_end || byInOutCalls)
  //     dispatch(getCallsData({ start: date_start, end: date_end, in_out: byInOutCalls }));
  // }, [date_start, date_end, byInOutCalls]);

  return (
    <main>
      <Info />
      <Filtering />
      <SpreadSheet />
    </main>
  );
};

export default PageCalls;
