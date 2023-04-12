import React, { useEffect } from 'react';
import Info from '../components/pageCalls/Info';
import Filtering from '../components/pageCalls/Filtering';
import SpreadSheet from '../components/pageCalls/SpreadSheet';
import { useAppDispatch } from '../store/store';
import { getCallsData } from '../store/reducers/callsDataSlice';
import { useSelector } from 'react-redux';
import { selectorCallsFilters } from '../store/reducers/callsFiltersSlice';

const PageCalls = () => {
  return (
    <main>
      <Info />
      {/* <Filtering />
      <SpreadSheet /> */}
    </main>
  );
};

export default PageCalls;
