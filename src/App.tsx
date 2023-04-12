import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/pageCalls';
import PageCalls from './pages/pageCalls';

function App() {
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
