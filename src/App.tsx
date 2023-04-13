import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageCalls from './pages/PageCalls';
import { useAppDispatch } from './store/store';
import { getCallsData } from './store/reducers/callsDataSlice';
import { useSelector } from 'react-redux';
import { selectorCallsFilters } from './store/reducers/callsFiltersSlice';

function App() {
  const dispatch = useAppDispatch();
  const { filters } = useSelector(selectorCallsFilters);

  useEffect(() => {
    console.log('request');
    if (!filters) return;
    dispatch(getCallsData(filters));
  }, [filters]);

  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <PageCalls />
      </div>
    </div>
  );
}

export default App;
