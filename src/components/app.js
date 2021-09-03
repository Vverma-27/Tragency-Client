import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Search from "./searchResults";
import TopSearches from "./topSearches";
import PostContent from "./postContent";
import "../styles/global.css";

const App = () => {
  return (
    <section>
      <Router>
        <Header />
        <main class="main">
          <Switch>
            <Route path={`/results`} exact component={Search} />
            <Route path={`/post`} exact component={PostContent} />
          </Switch>
          <TopSearches />
        </main>
        <Footer />
      </Router>
    </section>
  );
};

export default App;
