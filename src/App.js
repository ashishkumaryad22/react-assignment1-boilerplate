import React from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
// import Footer from './Components/footer/Footer';
// import Row from 'react-bootstrap/Row'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Dashboard
              key="general"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="general"
            />
          </Route>
          <Route exact path="/general">
            <Dashboard
              key="general"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <Dashboard
              key="business"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <Dashboard
              key="entertainment"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <Dashboard
              key="health"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <Dashboard
              key="science"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <Dashboard
              key="sports"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <Dashboard
              key="technology"
              pageSize={9}
              api="addfc84c662c49ac8c356eee82f21d55"
              category="technology"
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
