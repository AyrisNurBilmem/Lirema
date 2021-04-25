import React from "react"
import {Link} from "react-router-dom"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar"
import "./pages.css"


function Home(){
    return (
        <>
            <Sidebar />
           <h1 className="pagesh1">Home Page</h1>
        </>
    )
}

export default Home;