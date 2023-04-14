import { format, sub } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import ImgCalendar from '../../images/ImgCalendar';
import ImgArrow from '../../images/ImgArrow';
import { useAppDispatch } from '../../../store/store';
import {
  resetOffset,
  setFilterDateEnd,
  setFilterDateStart
} from '../../../store/reducers/callsFiltersSlice';
import { clearData } from '../../../store/reducers/callsDataSlice';

const Period = () => {
  const dispatch = useAppDispatch();

  const menuItems = ['3 дня', 'Неделя', 'Месяц', 'Год', 'Период'];
  const [three, week, month, year, custom] = menuItems;
  const menuItemsLength = menuItems.length;

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(three);

  const [valueStart, setValueStart] = useState<string | null>(null);
  const [valueEnd, setValueEnd] = useState<string | null>(null);

  const menu = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (e.target.textContent !== activeItem) {
      setActiveItem(e.target.textContent);
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

  const clickRight = () => {
    const currentItemIndex = menuItems.indexOf(activeItem);
    if (currentItemIndex === menuItemsLength - 2) return;
    setActiveItem(menuItems[currentItemIndex + 1]);
  };

  const clickLeft = () => {
    const currentItemIndex = menuItems.indexOf(activeItem);
    if (currentItemIndex === 0) return;
    setActiveItem(menuItems[currentItemIndex - 1]);
  };

  useEffect(() => {
    if (activeItem === custom) {
      return;
    }
    let period = {};
    switch (activeItem) {
      case three:
        period = { days: 3 };
        break;
      case week:
        period = { weeks: 1 };
        break;
      case month:
        period = { months: 1 };
        break;
      case year:
        period = { years: 1 };
        break;
      default:
        break;
    }
    const start = format(sub(new Date(), period), 'yyyy-MM-dd');
    const end = format(new Date(), 'yyyy-MM-dd');
    setValueStart(start);
    setValueEnd(end);
    handleFilters(start, end);
  }, [activeItem]);

  const getCustomPeriod = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (valueStart && valueEnd) {
      handleFilters(valueStart, valueEnd);
    }
    setActiveItem(custom);
    setMenuOpen(false);
  };

  const handleFilters = (start: string, end: string) => {
    dispatch(clearData());
    dispatch(resetOffset());
    dispatch(setFilterDateStart(start));
    dispatch(setFilterDateEnd(end));
  };

  return (
    <div ref={menu} className="period">
      <button onClick={clickLeft} className="btn-arrow">
        <ImgArrow direction="btn-left" />
      </button>
      <div onClick={() => setMenuOpen(!menuOpen)} className="period-days">
        <ImgCalendar />
        <div className="period-days__text">{activeItem}</div>
      </div>
      <button onClick={clickRight} className="btn-arrow">
        <ImgArrow direction="btn-right" />
      </button>
      {menuOpen && (
        <div className="period-menu">
          <div className="period-menu__menu" onClick={handleClick}>
            <div className={`period-menu__item ${activeItem === three ? 'active' : ''}`}>
              {three}
            </div>
            <div className={`period-menu__item ${activeItem === week ? 'active' : ''}`}>{week}</div>
            <div className={`period-menu__item ${activeItem === month ? 'active' : ''}`}>
              {month}
            </div>
            <div className={`period-menu__item ${activeItem === year ? 'active' : ''}`}>{year}</div>
          </div>
          <div className="period-menu__calendar">
            <div className="period-menu__text">Указать даты</div>
            <form onSubmit={getCustomPeriod} className="period-menu__dates">
              <div className="period-menu__inputs">
                <input
                  onChange={(e) => setValueStart(e.target.value)}
                  className="inputPeriod"
                  value={valueStart as string}
                  type="date"
                />
                <div>-</div>
                <input
                  onChange={(e) => setValueEnd(e.target.value)}
                  className="inputPeriod"
                  value={valueEnd as string}
                  type="date"
                />
              </div>
              <button type="submit" className="period-menu__button">
                <ImgCalendar />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Period;
