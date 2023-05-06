import React from 'react';
import ImgResults from '../images/sidebar/ImgResults';
import ImgOrders from '../images/sidebar/ImgOrders';
import ImgMessages from '../images/sidebar/ImgMessages';
import ImgCalls from '../images/sidebar/ImgCalls';
import ImgCounterparties from '../images/sidebar/ImgCounterparties';
import ImgDocuments from '../images/sidebar/ImgDocuments';
import ImgPerformers from '../images/sidebar/ImgPerformers';
import ImgReports from '../images/sidebar/ImgReports';
import ImgKnowledge from '../images/sidebar/ImgKnowledge';
import ImgSettings from '../images/sidebar/ImgSettings';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const sidebarItems = [
  { name: 'Итоги', image: <ImgResults />, path: ROUTES.RESULTS },
  { name: 'Заказы', image: <ImgOrders />, path: ROUTES.ORDERS },
  { name: 'Сообщения', image: <ImgMessages />, path: ROUTES.MESSAGES },
  { name: 'Звонки', image: <ImgCalls />, path: ROUTES.CALLS },
  { name: 'Контрагенты', image: <ImgCounterparties />, path: ROUTES.COUNTERPARTIES },
  { name: 'Документы', image: <ImgDocuments />, path: ROUTES.DOCUMENTS },
  { name: 'Исполнители', image: <ImgPerformers />, path: ROUTES.PERFORMERS },
  { name: 'Отчеты', image: <ImgReports />, path: ROUTES.REPORTS },
  { name: 'База знаний', image: <ImgKnowledge />, path: ROUTES.KNOWLEDGE },
  { name: 'Настройки', image: <ImgSettings />, path: ROUTES.SETTINGS }
];

const Menu = () => {
  return (
    <div className="menu">
      {sidebarItems.map(({ name, image, path }, index) => (
        <NavLink key={index} className="menu-item" to={path}>
          {image}
          <div className="menu-item__text">{name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
