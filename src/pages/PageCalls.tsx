import React, { useEffect } from 'react';
import Info from '../components/pageCalls/Info';
import Filtering from '../components/pageCalls/Filtering';
import SpreadSheet from '../components/pageCalls/SpreadSheet';
import { useSelector } from 'react-redux';
import { selectorCallsDataSlice } from '../store/reducers/callsDataSlice';
import { selectorCallsFilters } from '../store/reducers/callsFiltersSlice';
import { useAppDispatch } from '../store/store';
import { setOffset } from '../store/reducers/callsFiltersSlice';

const PageCalls = () => {
  const dispatch = useAppDispatch();
  const { totalRows, isLoading } = useSelector(selectorCallsDataSlice);
  const {
    filters: { offset }
  } = useSelector(selectorCallsFilters);

  useEffect(() => {
    console.log('useEf scroll');
    const onScroll = (e: any) => {
      if (e.target.documentElement && totalRows) {
        const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 50 && totalRows > offset + 50) {
          if (!isLoading) {
            dispatch(setOffset());
            // setOffset(() => offset + 50);
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
