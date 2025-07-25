

/**
 * Node Module
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


/**
 * Components
 */
import './index.css';


/**
 * css link
 */
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
