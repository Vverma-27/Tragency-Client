import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Redirect } from "react-router-dom";
// import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { loadUser } from "../actions";
import Header from "./header";
import Footer from "./footer";
import Search from "./searchResults";
import PostContent from "./postContent";
import Home from "./home";
// import MainDiary from "./diary";
import "../styles/global.css";
import Coming from "./coming";
import SignIn from "./signIn";
import history from "../history";
import SignUp from "./signUp";
import Alert from "./alert";
import Comments from "./comments";

const App = ({ loadUser, isAuthenticated }) => {
  useEffect(() => {
    loadUser();
    if (history.location.pathname.split("/")[1] !== "auth") {
      if (!isAuthenticated) history.push("/auth/signin");
    }
    if (history.location.pathname.split("/")[1] === "auth" && isAuthenticated) {
      history.push("/feed");
    }
  }, [loadUser, isAuthenticated]);
  // useBottomScrollListener(
  //   () => {
  //     console.log("i am at bottom");
  //   },
  //   {
  //     offset: 300,
  //   }
  // );
  return (
    <section style={{ height: "100%" }}>
      <Router history={history}>
        <Alert />
        <Switch>
          <Route path={`/auth/signin`} exact component={SignIn} />
          <Route path={`/auth/signup`} exact component={SignUp} />
          <Route
            path={`/feed`}
            exact
            component={() => (
              <>
                <Header />
                <Home />
                <Footer />
              </>
            )}
          />
          <Route
            path={`/comments/:id`}
            exact
            component={() => (
              <>
                <Header />
                <Comments />
                <Footer />
              </>
            )}
          />
          <Route
            path={`/results`}
            exact
            component={() => (
              <>
                <Header />
                <Search />
                <Footer />
              </>
            )}
          />
          <Route
            path={`/post`}
            exact
            component={() => (
              <>
                <Header />
                <PostContent />
                <Footer />
              </>
            )}
          />
          {/* <Route
            path={`/diary`}
            exact
            component={() => (
              <>
                <Header />
                <MainDiary />
                <Footer />
              </>
            )}
          /> */}
          <Route
            path={`/market`}
            exact
            component={() => (
              <>
                <Header />
                <Coming />
                <Footer />
              </>
            )}
          />
          <Route
            path={`/diary`}
            exact
            component={() => (
              <>
                <Header />
                <Coming />
                <Footer />
              </>
            )}
          />
        </Switch>
      </Router>
    </section>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loadUser })(App);
