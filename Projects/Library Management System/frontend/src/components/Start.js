import React from "react"
import library from "./images/—Pngtree—hand drawn cartoon reading day_5357253.png"
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-router-dom";

function Start(){

     return(
        <div className="start-con">
         <div className = "split right">
         <div className="centered">
            <h1 className = "welcome">Welcome</h1>
             <Login />
             <div className = "no-account">
                 <h3>No accont?</h3>
                 <p className ="register-p">Register here!</p>
                 <Link to="/register">
                 <button className="start-register">Register</button>
                </Link>
             </div>
             
            </div>
         </div>
        <div className= "split left">
         <div className="centered">
             <img className = "girl" src ={library} alt ="library-img" />
         </div>
        </div>
        </div>
     )


}

export default Start;