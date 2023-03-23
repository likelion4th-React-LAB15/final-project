import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Footer />
  </Router>
);
