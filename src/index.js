import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from './components/parent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

