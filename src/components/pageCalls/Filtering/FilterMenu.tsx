import React, { useEffect, useRef, useState } from 'react';
import ImgArrow from '../../images/ImgArrow';
import { filtersValues } from '../../../services/constants';
import { useSelector } from 'react-redux';
import {
  selectorCallsFilters,
  setFilterInOutCalls
} from '../../../store/reducers/callsFiltersSlice';
import { useAppDispatch } from '../../../store/store';

const FilterMenu = () => {
  const dispatch = useAppDispatch();

  const { filters } = useSelector(selectorCallsFilters);
  const { in_out } = filters;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = filtersValues.inOutCalls;
  const [activeItem, setActiveItem] = useState<string>(menuItems[0].name);

  useEffect(() => {
    if (!in_out) {
      setActiveItem(menuItems[0].name);
    }
  }, [in_out]);

  useEffect(() => {
    const request = menuItems.find((item) => item.name === activeItem);
    if (request) {
      dispatch(setFilterInOutCalls(request.request));
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
                  {item.name}
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
