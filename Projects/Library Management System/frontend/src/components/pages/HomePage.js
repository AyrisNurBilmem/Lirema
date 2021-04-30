import React from "react"
import axios from "axios"
import Sidebar from "../sidebar/Sidebar"
import Books from "../books/Books"
import "./pages.css"


function Home(){
    return (
        <div className="home-div">
          <Sidebar />
          <h1 className ="home-h1">Search Books</h1>
           <Books/>
          
        </div>
    )
}

export default Home;