import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Home, 
  CalendarCheck, 
  Building2, 
  CreditCard, 
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [paymentExpanded, setPaymentExpanded] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'customer', icon: Users, label: 'Customer Management' },
    { id: 'accommodation', icon: Home, label: 'Accommodation' },
    { id: 'booking', icon: CalendarCheck, label: 'Booking Management' },
    { id: 'hotel', icon: Building2, label: 'Hotel Management' },
    { 
      id: 'payment', 
      icon: CreditCard, 
      label: 'Payment Management',
      hasSubmenu: true
    },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">GW</div>
        <span className="logo-text">GoodWeeks</span>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveMenu(item.id);
                if (item.hasSubmenu) {
                  setPaymentExpanded(!paymentExpanded);
                }
              }}
            >
              <item.icon size={20} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
              {item.hasSubmenu && (
                <span className="nav-arrow">
                  {paymentExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
              )}
            </button>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;