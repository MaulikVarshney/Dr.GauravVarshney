import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

// ✅ place console.log outside the JSX (not inside <React.StrictMode>)
console.log("Base Path:", import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
)
