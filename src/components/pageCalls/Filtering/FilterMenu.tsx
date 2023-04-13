import React, { useEffect, useRef, useState } from 'react';
import ImgArrow from '../../images/ImgArrow';
import { menuItemTypes } from '../../../services/constants';
import Loader from '../../commonUI/Loader';

interface FilterMenuProps {
  menuItems: menuItemTypes[];
  filter: string;
  getFiltered: (params: string) => void;
}

const FilterMenu = ({ menuItems, filter, getFiltered }: FilterMenuProps) => {
  // if (!menuItems.length) <Loader />;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>(menuItems[0].name);

  useEffect(() => {
    if (!filter) {
      setActiveItem(menuItems[0].name);
    }
  }, [filter]);

  useEffect(() => {
    const employee = menuItems.find((item) => item.name === activeItem);
    if (employee) {
      getFiltered(String(employee.request));
    }
  }, [activeItem]);

  const menu = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (e.target.textContent !== activeItem) {
      setActiveItem(e.target.textContent as string);
      setMenuOpen(false);
    }
  };

  const hideForm = (e: any) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', hideForm);
    return () => {
      document.removeEventListener('click', hideForm);
    };
  }, [menu]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div ref={menu} className="filter" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="filter-item">
        <div
          className="filter-item__text"
          style={activeItem !== menuItems[0].name ? { color: '#005FF8' } : {}}>
          {activeItem}
        </div>
      </div>
      <button onClick={openMenu} className="btn-arrow">
        {menuOpen ? <ImgArrow direction="btn-up" /> : <ImgArrow direction="btn-down" />}
      </button>
      {menuOpen && (
        <div className="filter-menu">
          <div className="filter-menu__menu" onClick={handleClick}>
            {menuItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`filter-menu__item ${activeItem === item.name ? 'active' : ''}`}>
                  {item.element ? item.element : item.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
