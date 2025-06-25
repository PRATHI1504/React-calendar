import React from 'react';
import { formatDate, getPreviousMonth, getNextMonth } from '../utils/dateUtils';

const CalendarHeader = ({ currentMonth, onMonthChange }) => {
  const handlePrevMonth = () => {
    onMonthChange(getPreviousMonth(currentMonth));
  };

  const handleNextMonth = () => {
    onMonthChange(getNextMonth(currentMonth));
  };

  return (
    <div className="calendar-header">
      <h1 className="calendar-title">Calendar</h1>
      <div className="month-navigation">
        <button 
          className="nav-button prev" 
          onClick={handlePrevMonth}
          aria-label="Previous month"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        
        <h2 className="month-year">
          {formatDate(currentMonth, 'MMMM yyyy')}
        </h2>
        
        <button 
          className="nav-button next" 
          onClick={handleNextMonth}
          aria-label="Next month"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;