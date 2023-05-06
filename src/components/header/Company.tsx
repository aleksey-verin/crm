import React from 'react';
import ImgArrow from '../images/ImgArrow';

const Company = () => {
  // const { data } = useSelector(selectorCallsDataSlice);
  // const partnerName = data ? data[0]?.partner_data.name : null;

  return (
    <div className="company">
      <div className="company-name">ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"</div>
      <ImgArrow direction="btn-down" />
    </div>
  );
};

export default Company;
