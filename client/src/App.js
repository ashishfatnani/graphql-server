import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";

import MenuBar from "./components/MenuBar";
import { Container } from "semantic-ui-react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from './pages/SinglePost';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Container>
            <MenuBar></MenuBar>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
