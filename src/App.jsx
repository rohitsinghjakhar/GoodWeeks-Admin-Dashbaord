import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import HotelManagement from './components/HotelManagement/HotelManagement';
import './App.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('hotel');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <main className="main-content">
        <Header toggleSidebar={toggleSidebar} />
        <HotelManagement />
      </main>
    </div>
  );
}

export default App;