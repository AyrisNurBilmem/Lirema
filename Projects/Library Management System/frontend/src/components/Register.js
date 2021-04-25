import React from "react";
import {Link} from "react-router-dom";
import library from "./images/—Pngtree—hand drawn cartoon reading day_5357258.png"


function Register(){
    console.log("Register page");
    return(
        <div>
        <div className = "split right">
        <div className="centered">
           <h1 className = "welcome">Register</h1>
           <div className = "start">
             <label className ="start-label">First Name</label>
             <input className ="start-input" type ="text" placeholder ="Enter your name"></input>
             </div>
             <div className = "start">
             <label className ="start-label">Last Name</label>
             <input className ="start-input" type ="text" placeholder ="Enter your surname"></input>
             </div>
           <div className="start">
                <label className ="start-label email">Email</label>
                 <input  className ="start-input " type="email" placeholder="Enter email"></input>
             </div>
             <div className = "start">
             <label className ="start-label password">Password        </label>
             <input className ="start-input " type ="password" placeholder ="Enter password"></input>
             </div>
             
             <div className = "start">
             <label className ="start-label address">Address    </label>
             <textarea className ="start-input textarea" type ="text" placeholder ="Enter address" rows="5" cols="20"></textarea>
             </div>
             <Link to="/home">
             <button className="login-btn register-btn">Create Account</button>
             </Link>
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

export default Register;