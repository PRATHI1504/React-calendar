import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
  parseISO
} from 'date-fns';

// Get all days to display in calendar grid (including prev/next month days)
export const getCalendarDays = (date) => {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  });
};

// Check if date is in current month
export const isCurrentMonth = (date, currentMonth) => {
  return isSameMonth(date, currentMonth);
};

// Check if date is today
export const isDateToday = (date) => {
  return isToday(date);
};

// Check if two dates are the same
export const isSameDateAs = (date1, date2) => {
  return isSameDay(date1, date2);
};

// Format date for display
export const formatDate = (date, formatString = 'MMMM yyyy') => {
  return format(date, formatString);
};

// Navigate months
export const getPreviousMonth = (date) => {
  return subMonths(date, 1);
};

export const getNextMonth = (date) => {
  return addMonths(date, 1);
};

// Parse ISO date string
export const parseDate = (dateString) => {
  return parseISO(dateString);
};

// Get events for a specific date
export const getEventsForDate = (events, date) => {
  return events.filter(event => 
    isSameDay(parseDate(event.date), date)
  );
};

// Check for event conflicts (overlapping times)
export const hasEventConflicts = (events) => {
  if (events.length <= 1) return false;

  const sortedEvents = events.sort((a, b) => {
    const timeA = parseInt(a.time.replace(':', ''));
    const timeB = parseInt(b.time.replace(':', ''));
    return timeA - timeB;
  });

  for (let i = 0; i < sortedEvents.length - 1; i++) {
    const currentEvent = sortedEvents[i];
    const nextEvent = sortedEvents[i + 1];
    
    const currentStart = parseInt(currentEvent.time.replace(':', ''));
    const currentEnd = currentStart + (currentEvent.duration || 0);
    const nextStart = parseInt(nextEvent.time.replace(':', ''));
    
    if (currentEnd > nextStart) {
      return true;
    }
  }
  
  return false;
};