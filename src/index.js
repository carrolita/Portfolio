import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app"
import "./index.scss"
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom'


  ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById("root"))
