import React, { useState } from "react";
import { dateArray } from "../data";

const DateDropdown = ({ selectedDate, setSelectedDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="custom-dropdown">
        <div className="selected-date" onClick={toggleDropdown}>
          <span>{selectedDate}</span>
          <span className={`dropdown-arrow ${isOpen ? "up" : "down"}`}>▼</span>
        </div>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          {dateArray.map((date) => (
            <div 
              key={date} 
              className="dropdown-item"
              onClick={() => handleDateSelect(date)}
            >
              {date}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DateDropdown;