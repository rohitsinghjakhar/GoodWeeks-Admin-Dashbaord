import React from 'react';
import { Bell, ChevronDown, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <div className="header-title">
          <h1>Hotel Management</h1>
          <p>Manage all hotel listings, rooms, policies, and pricing.</p>
        </div>
      </div>
      
      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={22} />
        </button>
        
        <div className="user-profile">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQFZ0dLqLIKzUg/profile-displayphoto-scale_400_400/B56Zr6EjI6JsAg-/0/1765132128720?e=1767225600&v=beta&t=24nfIfveafZ91-oqM3Si5LmFWsYBx0YFohBADRX6H_8" 
            alt="User" 
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">Shubham Tiwary</span>
            <span className="user-role">Admin</span>
          </div>
          <ChevronDown size={18} className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;