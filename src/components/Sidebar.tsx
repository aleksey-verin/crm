import React from 'react';
import Actions from './sidebar/Actions';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';

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
