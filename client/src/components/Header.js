import React from 'react';
import './Header.css'; // Tạo file CSS cho Header

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Hotel Booking</h1>
        <nav>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Ưu đãi</a></li>
            <li><a href="#">Danh mục khách sạn</a></li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search for rooms..." className="search-input" />
          <button className="search-button">Tìm Kiếm</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
