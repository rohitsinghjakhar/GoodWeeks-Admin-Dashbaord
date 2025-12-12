import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronDown, 
  Plus, 
  Trash2, 
  Eye, 
  Pencil, 
  Star 
} from 'lucide-react';
import hotelsData from '../../data/hotels.json';
import './HotelManagement.css';

const HotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [cityFilter, setCityFilter] = useState('All Cities');
  const [selectedHotels, setSelectedHotels] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setHotels(hotelsData);
  }, []);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedHotels([]);
    } else {
      setSelectedHotels(hotels.map(hotel => hotel.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectHotel = (id) => {
    if (selectedHotels.includes(id)) {
      setSelectedHotels(selectedHotels.filter(hotelId => hotelId !== id));
    } else {
      setSelectedHotels([...selectedHotels, id]);
    }
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || hotel.status === statusFilter;
    const matchesCity = cityFilter === 'All Cities' || hotel.location.includes(cityFilter);
    return matchesSearch && matchesStatus && matchesCity;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  const cities = ['All Cities', 'Dubai, UAE', 'Goa, India', 'Jaipur, India', 'Mumbai, India', 'Maldives'];
  const statuses = ['All Status', 'Active', 'InActive'];

  return (
    <div className="hotel-management">
      <div className="filters-section">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search hotels..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters-row">
          <div className="filter-dropdown">
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown size={18} className="dropdown-chevron" />
          </div>

          <div className="filter-dropdown">
            <select 
              value={cityFilter} 
              onChange={(e) => setCityFilter(e.target.value)}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ChevronDown size={18} className="dropdown-chevron" />
          </div>

          <button className="apply-btn">Apply</button>
          
          <button className="trash-btn">
            <Trash2 size={18} />
            <span className="btn-text">Trash</span>
          </button>
        </div>

        <button className="add-hotel-btn">
          <Plus size={18} />
          <span className="btn-text">Add New Hotel</span>
        </button>
      </div>

      <div className="hotels-table-container">
        <table className="hotels-table">
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="checkbox"
                />
              </th>
              <th>HOTEL</th>
              <th className="hide-mobile">ROOMS</th>
              <th className="hide-tablet">PRICE RANGE</th>
              <th className="hide-mobile">STATUS</th>
              <th className="hide-tablet">LAST UPDATED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredHotels.map((hotel) => (
              <tr key={hotel.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={selectedHotels.includes(hotel.id)}
                    onChange={() => handleSelectHotel(hotel.id)}
                    className="checkbox"
                  />
                </td>
                <td>
                  <div className="hotel-info">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name} 
                      className="hotel-image"
                    />
                    <div className="hotel-details">
                      <span className="hotel-name">{hotel.name}</span>
                      <div className="hotel-rating">
                        <Star size={14} className="star-icon" fill="#f5a623" color="#f5a623" />
                        <span>{hotel.rating} ({hotel.reviews.toLocaleString()} reviews)</span>
                      </div>
                      <span className="hotel-location">{hotel.location}</span>
                      <div className="mobile-info">
                        <span className="mobile-rooms">{hotel.rooms} rooms</span>
                        <span className={`status-badge ${hotel.status.toLowerCase()}`}>
                          {hotel.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="rooms-cell hide-mobile">{hotel.rooms}</td>
                <td className="price-cell hide-tablet">
                  ₹{formatPrice(hotel.priceMin)} — ₹{formatPrice(hotel.priceMax)} / night
                </td>
                <td className="hide-mobile">
                  <span className={`status-badge ${hotel.status.toLowerCase()}`}>
                    {hotel.status}
                  </span>
                </td>
                <td className="updated-cell hide-tablet">{hotel.lastUpdated}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">
                      <Eye size={18} />
                    </button>
                    <button className="action-btn edit-btn">
                      <Pencil size={18} />
                    </button>
                    <button className="action-btn delete-btn">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelManagement;