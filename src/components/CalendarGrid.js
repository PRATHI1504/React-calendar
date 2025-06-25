import React from 'react';
import { 
  getCalendarDays, 
  isCurrentMonth, 
  isDateToday, 
  getEventsForDate,
  hasEventConflicts
} from '../utils/dateUtils';

const CalendarGrid = ({ currentMonth, events, onDateClick }) => {
  const calendarDays = getCalendarDays(currentMonth);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderEvent = (event, hasConflict) => (
    <div 
      key={event.id}
      className={`event ${event.type} ${hasConflict ? 'conflict' : ''}`}
      title={`${event.title} - ${event.time}`}
    >
      <span className="event-time">{event.time}</span>
      <span className="event-title">{event.title}</span>
    </div>
  );

  return (
    <div className="calendar-grid">
      {/* Week day headers */}
      <div className="week-header">
        {weekDays.map(day => (
          <div key={day} className="week-day">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="days-grid">
        {calendarDays.map((day, index) => {
          const dayEvents = getEventsForDate(events, day);
          const hasConflict = hasEventConflicts(dayEvents);
          const isToday = isDateToday(day);
          const isInCurrentMonth = isCurrentMonth(day, currentMonth);

          return (
            <div
              key={index}
              className={`calendar-day ${
                isInCurrentMonth ? 'current-month' : 'other-month'
              } ${isToday ? 'today' : ''} ${
                dayEvents.length > 0 ? 'has-events' : ''
              }`}
              onClick={() => onDateClick(day, dayEvents)}
            >
              <div className="day-number">
                {day.getDate()}
              </div>
              
              <div className="events-container">
                {dayEvents.slice(0, 3).map(event => 
                  renderEvent(event, hasConflict)
                )}
                {dayEvents.length > 3 && (
                  <div className="more-events">
                    +{dayEvents.length - 3} more
                  </div>
                )}
              </div>

              {hasConflict && (
                <div className="conflict-indicator" title="Time conflicts detected">
                  ⚠️
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;