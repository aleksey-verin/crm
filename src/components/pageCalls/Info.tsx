import React from 'react';
import Loader from '../commonUI/Loader';
import Balance from './Info/Balance';
import Period from './Info/Period';
import { useSelector } from 'react-redux';
import { selectorCallsDataSlice } from '../../store/reducers/callsDataSlice';

const Info = () => {
  const { isLoading } = useSelector(selectorCallsDataSlice);

  return (
    <div className="info">
      {isLoading && <Loader />}
      <Balance />
      <Period />
    </div>
  );
};

export default Info;
