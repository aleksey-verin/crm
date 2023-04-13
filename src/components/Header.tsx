import React from 'react';

import CurrentDate from './Header/CurrentDate';
import Parameters from './Header/Parameters';
import Company from './Header/Company';
import User from './Header/User';
import Search from './commonUI/Search';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <CurrentDate />
        <Parameters />
        <div className="search">
          <Search />
        </div>
        <div className="user-block">
          <Company />
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
