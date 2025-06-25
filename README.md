# Calendar Application

A beautiful, responsive calendar application built with React that displays events and handles scheduling conflicts.

## 🌟 Features

- **Monthly Calendar View**: Clean grid layout showing all dates of the month
- **Navigation**: Easy month navigation with previous/next buttons  
- **Event Display**: Shows events loaded from JSON data
- **Conflict Detection**: Identifies and highlights overlapping events
- **Event Details**: Click any date to view detailed event information
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Beautiful gradient design with smooth animations
- **Current Date Highlighting**: Today's date is visually emphasized

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/calendar-app)

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## 🛠️ Installation & Setup

1. **Clone or create the project**
   ```bash
   npx create-react-app calendar-app
   cd calendar-app
   ```

2. **Install dependencies**
   ```bash
   npm install date-fns
   ```

3. **Copy the project files**
   Copy all the provided files into their respective directories as shown in the project structure.

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
calendar-app/
├── public/
│   ├── index.html          # Main HTML template
│   └── events.json         # Static event data
├── src/
│   ├── components/
│   │   ├── Calendar.js     # Main calendar component
│   │   ├── CalendarGrid.js # Calendar grid and date cells
│   │   ├── CalendarHeader.js # Navigation header
│   │   └── EventModal.js   # Event details modal
│   ├── styles/
│   │   └── Calendar.css    # All styling
│   ├── utils/
│   │   └── dateUtils.js    # Date manipulation utilities
│   ├── App.js              # Root component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Event Types & Colors

- **Work Events**: Green theme
- **Personal Events**: Orange theme  
- **Social Events**: Purple theme
- **Conflicting Events**: Red theme with pulse animation

## 🔧 Customization

### Adding New Events

Edit `public/events.json` to add or modify events:

```json
{
  "id": 11,
  "title": "New Event",
  "date": "2025-06-30",
  "time": "15:00",
  "duration": 60,
  "description": "Event description",
  "type": "work"
}
```

### Styling

Modify `src/styles/Calendar.css` to customize:
- Colors and themes
- Layout and spacing
- Animations and transitions
- Responsive breakpoints

## 🚀 Deployment

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/calendar-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repo for automatic deployment
- **Vercel**: Import your project for instant deployment
- **Firebase Hosting**: Use Firebase CLI to deploy

## 🎯 Key Features Explained

### Event Conflict Detection
The application automatically detects when events overlap in time and:
- Highlights conflicting events in red
- Shows a warning icon on affected dates
- Pulses conflicting events for attention

### Responsive Design
- **Desktop**: Full calendar view with hover effects
- **Tablet**: Optimized touch targets and spacing
- **Mobile**: Compact view with touch-friendly navigation

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

