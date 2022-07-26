import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';

import { App } from './modules/app/App';

import { UserProvider } from './modules/contexts/User.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);
