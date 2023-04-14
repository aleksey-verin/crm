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
      {sidebarItems.map(({ name, image, path }) => (
        <NavLink className="menu-item" to={path}>
          {/* <div className="menu-item"> */}
          {image}
          <div className="menu-item__text">{name}</div>
          {/* </div> */}
        </NavLink>
      ))}
      {/* <div className="menu-item">
      <ImgResults />
        <div className="menu-item__text">Итоги</div>
      </div>
      <div className="menu-item">
        <ImgOrders />
        <div className="menu-item__text">Заказы</div>
      </div>
      <div className="menu-item">
        <ImgMessages />
        <div className="menu-item__text">Сообщения</div>
      </div>
      <div className="menu-item checked">
        <ImgCalls />
        <div className="menu-item__text">Звонки</div>
      </div>
      <div className="menu-item">
        <ImgCounterparties />
        <div className="menu-item__text">Контрагенты</div>
      </div>
      <div className="menu-item">
        <ImgDocuments />
        <div className="menu-item__text">Документы</div>
      </div>
      <div className="menu-item">
        <ImgPerformers />
        <div className="menu-item__text">Исполнители</div>
      </div>
      <div className="menu-item">
        <ImgReports />
        <div className="menu-item__text">Отчеты</div>
      </div>
      <div className="menu-item">
        <ImgKnowledge />
        <div className="menu-item__text">База знаний</div>
      </div>
      <div className="menu-item">
        <ImgSettings />
        <div className="menu-item__text">Настройки</div>
      </div> */}
    </div>
  );
};

export default Menu;
