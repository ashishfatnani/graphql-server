import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import MenuBar from "./components/MenuBar";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
        <MenuBar></MenuBar>
        {/* <Route exact path ="/" component ={Home}></Route>
        <Route exact path ="/login" component ={Login}></Route>
        <Route exact path ="/register" component ={Register}></Route> */}
        </Container>
      </Router>
    </div>
  );
}

export default App;
