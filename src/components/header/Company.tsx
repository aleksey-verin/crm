import React from 'react';
import ImgArrow from '../images/ImgArrow';
import { useSelector } from 'react-redux';
import { selectorCallsDataSlice } from '../../store/reducers/callsDataSlice';
import Loader from '../commonUI/Loader';

const Company = () => {
  const { data } = useSelector(selectorCallsDataSlice);

  const partnerName = data ? data[0]?.partner_data.name : null;

  return (
    <div className="company">
      <div className="company-name">{partnerName}</div>
      <ImgArrow direction="btn-down" />
    </div>
  );
};

export default Company;
