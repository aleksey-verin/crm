import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PageCalls from './pages/PageCalls';
import { useAppDispatch } from './store/store';
import { getCallsData } from './store/reducers/callsDataSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('here');
    dispatch(getCallsData({}));
  }, []);

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
