import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
