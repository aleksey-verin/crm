import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import SidebarBtn from '../components/commonUI/SidebarBtn';

const PageOther = () => {
  return (
    <main className="other">
      <div className="other-page">
        <div className="other-page_text">
          <p>Страница находится в разработке.</p>
          <p>
            Пожалуйста, перейдите на страницу <Link to={ROUTES.CALLS}>"Звонки"</Link>
          </p>
          <p style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={ROUTES.CALLS}>
              <SidebarBtn text="Перейти.." pic="attention" />
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PageOther;
