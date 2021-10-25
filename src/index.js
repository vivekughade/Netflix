import React from "react"
import ReactDOM  from "react-dom"
import {BrowserRouter} from "react-router-dom"
import App from "./components/App"
import Menu from "./components/Menu"
ReactDOM.render(
    <>
    
    <BrowserRouter>
    <Menu/>
    <App/>
    
      
    </BrowserRouter>
   
    </>,document.getElementById("root")
)