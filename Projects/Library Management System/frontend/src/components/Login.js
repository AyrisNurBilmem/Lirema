import React from "react";


function Login(){
    return(
        <div>
             <div className="start">
                <label className ="start-label">Username</label>
                 <input  className ="start-input" type="text" placeholder="Enter username"></input>
             </div>
             <div className = "start">
             <label className ="start-label">Password  </label>
             <input className ="start-input" type ="password" placeholder ="Enter password"></input>
             </div>
             <button className="login-btn">Login</button>

        </div>
    )
}

export default Login;