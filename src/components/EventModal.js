import React from 'react';
import { formatDate } from '../utils/dateUtils';

const EventModal = ({ isOpen, onClose, date, events }) => {
  if (!isOpen || !date) return null;

  const formatDuration = (duration) => {
    if (duration === 0) return 'All day';
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    
    if (hours === 0) return `${minutes}m`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Events for {formatDate(date, 'MMMM d, yyyy')}</h3>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          {events.length === 0 ? (
            <p className="no-events">No events scheduled for this day.</p>
          ) : (
            <div className="events-list">
              {events
                .sort((a, b) => a.time.localeCompare(b.time))
                .map(event => (
                  <div key={event.id} className={`event-item ${event.type}`}>
                    <div className="event-header">
                      <h4 className="event-title">{event.title}</h4>
                      <span className={`event-type ${event.type}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="event-details">
                      <div className="event-time">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        {event.time} ({formatDuration(event.duration)})
                      </div>
                      
                      {event.description && (
                        <div className="event-description">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10,9 9,9 8,9"></polyline>
                          </svg>
                          {event.description}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventModal;