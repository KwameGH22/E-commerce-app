import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ProductsContextProvider from './components/data/ProductsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
      
    </Router>
  </React.StrictMode>,
)
