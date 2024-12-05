import ReactGA from 'react-ga4';

// Replace 'G-NE6XRMDYNW' with your actual Measurement ID from Google Analytics
export const initializeAnalytics = () => {
  ReactGA.initialize('G-NE6XRMDYNW');
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path 
  });
};