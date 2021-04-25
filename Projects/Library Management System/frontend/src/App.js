import React  from "react";
import Start from "./components/Start"
import Register from "./components/Register";
import Home from "./components/pages/HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ViewBooks from "./components/pages/ViewBooks";
import Checkout from "./components/pages/Checkout";
import Deadlines from "./components/pages/Deadlines";
import History from "./components/pages/History";


function App() {


  return (
    <Router>
    <div className="App">
      
        <Switch>
          <Route path="/" exact component={Start}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" component={Home}/>
          <Route path="/viewbooks" exact component={ViewBooks} />
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/deadlines" exact component={Deadlines}/>
          <Route path="/history" exact component={History}/>
       </Switch>
  
      
    </div>
    </Router>
  );
}

export default App;
