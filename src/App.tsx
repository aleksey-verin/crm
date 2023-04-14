import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageCalls from './pages/PageCalls';
import { useAppDispatch } from './store/store';
import { getCallsData } from './store/reducers/callsDataSlice';
import { useSelector } from 'react-redux';
import { resetOffset, selectorCallsFilters } from './store/reducers/callsFiltersSlice';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes/routes';
import PageOther from './pages/PageOther';

function App() {
  const dispatch = useAppDispatch();
  const {
    filters,
    filters: { date_start }
  } = useSelector(selectorCallsFilters);

  // useEffect(() => {
  //   console.log('request');
  //   if (!filters) return;
  //   // dispatch(resetOffset());
  //   dispatch(getCallsData(filters));
  // }, [filters]);

  useEffect(() => {
    console.log('request');
    if (!date_start) return;
    // dispatch(resetOffset());
    dispatch(getCallsData(filters));
  }, [filters]);

  return (
    <div className="App">
      <HashRouter>
        <Sidebar />
        <div className="container">
          <Header />
          <Routes>
            <Route element={<PageCalls />} path={ROUTES.CALLS} />
            <Route element={<PageOther />} path={ROUTES.RESULTS} />
            <Route element={<PageOther />} path={ROUTES.ORDERS} />
            <Route element={<PageOther />} path={ROUTES.MESSAGES} />
            <Route element={<PageOther />} path={ROUTES.COUNTERPARTIES} />
            <Route element={<PageOther />} path={ROUTES.DOCUMENTS} />
            <Route element={<PageOther />} path={ROUTES.PERFORMERS} />
            <Route element={<PageOther />} path={ROUTES.REPORTS} />
            <Route element={<PageOther />} path={ROUTES.KNOWLEDGE} />
            <Route element={<PageOther />} path={ROUTES.SETTINGS} />
            <Route path="*" element={<Navigate replace to={ROUTES.CALLS} />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
