import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import {BrowserRouter as Router} from "react-router-dom"
import { AppContextProvider } from './contexts/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </React.StrictMode>,
)
