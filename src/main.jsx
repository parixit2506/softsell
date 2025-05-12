import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Add meta tags for SEO
document.title = 'SoftSell - Turn Unused Software Licenses Into Cash';

// Create meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'SoftSell helps businesses recover value from unused software licenses. Get top dollar for your dormant licenses with our secure platform.';
document.head.appendChild(metaDescription);

// Create meta keywords
const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'software resale, license resale, sell software licenses, software marketplace, IT asset recovery';
document.head.appendChild(metaKeywords);

// Add Open Graph meta tags for social sharing
const ogTitle = document.createElement('meta');
ogTitle.property = 'og:title';
ogTitle.content = 'SoftSell - Turn Unused Software Licenses Into Cash';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.property = 'og:description';
ogDescription.content = 'SoftSell helps businesses recover value from unused software licenses. Get top dollar for your dormant licenses with our secure platform.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.property = 'og:type';
ogType.content = 'website';
document.head.appendChild(ogType);

// Render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
