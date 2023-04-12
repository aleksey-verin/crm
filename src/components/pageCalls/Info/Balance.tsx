import React from 'react';
import ImgPlus from '../../images/ImgPlus';

const Balance = () => {
  return (
    <div className="balance">
      <div className="balance-text">
        Баланс: <span>272 ₽</span>
      </div>
      <ImgPlus fill="#005FF8" opacity="1" />
    </div>
  );
};

export default Balance;
