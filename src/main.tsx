import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      console.log("Base Path: ", import.meta.env.BASE_URL);
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
