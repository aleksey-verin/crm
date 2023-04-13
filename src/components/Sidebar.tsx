import React from 'react';
import Logo from './sidebarbar/Logo';
import Menu from './sidebarbar/Menu';
import Actions from './sidebarbar/Actions';

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
