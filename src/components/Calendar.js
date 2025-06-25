import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventModal from './EventModal';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch('/calendar-app/events.json');

        
        if (!response.ok) {
          throw new Error('Failed to load events');
        }
        
        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };

  const handleDateClick = (date, dayEvents) => {
    setSelectedDate(date);
    setSelectedEvents(dayEvents);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    setSelectedEvents([]);
  };

  if (loading) {
    return (
      <div className="calendar-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading calendar...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="calendar-container">
        <div className="error">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <CalendarHeader 
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
      />
      
      <CalendarGrid
        currentMonth={currentMonth}
        events={events}
        onDateClick={handleDateClick}
      />
      
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        date={selectedDate}
        events={selectedEvents}
      />
    </div>
  );
};

export default Calendar;