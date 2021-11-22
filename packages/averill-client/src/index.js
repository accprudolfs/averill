import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const rootEl = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl,
)
