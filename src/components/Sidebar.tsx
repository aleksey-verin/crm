import React from 'react';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';
import Actions from './sidebar/Actions';

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
