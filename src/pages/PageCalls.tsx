import React from 'react';
import Info from '../components/pageCalls/Info';
import Filtering from '../components/pageCalls/Filtering';
import SpreadSheet from '../components/pageCalls/SpreadSheet';

const PageCalls = () => {
  return (
    <main>
      <Info />
      <Filtering />
      <SpreadSheet />
    </main>
  );
};

export default PageCalls;
