import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

const PageOther = () => {
  return (
    <main className="other">
      <div className="other-page">
        <div className="other-page_text">
          Страница в разработке. Перейдите на страницу <Link to={ROUTES.CALLS}>"Звонки"</Link>
        </div>
      </div>
    </main>
  );
};

export default PageOther;
