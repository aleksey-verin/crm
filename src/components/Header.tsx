import React from 'react';

import CurrentDate from './header/CurrentDate';
import Parameters from './header/Parameters';
import Company from './header/Company';
import User from './header/User';
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
