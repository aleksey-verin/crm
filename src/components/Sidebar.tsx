import React from 'react';
import Logo from './Sidebar/Logo';
import Menu from './Sidebar/Menu';
import Actions from './Sidebar/Actions';

const Sidebar = () => {
  return (
    <menu className="sidebar">
      <Logo />
      <Menu />
      <Actions />
    </menu>
  );
};

export default Sidebar;
