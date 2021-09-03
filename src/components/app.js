import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Search from "./searchResults";
import "../styles/global.css";

const App = () => {
  return (
    <section>
      <Router>
        <Header />
        <Switch>
          <Route path={`/results`} exact component={Search} />
        </Switch>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
