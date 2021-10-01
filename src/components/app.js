import React, { useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import Header from "./header";
import Footer from "./footer";
import Search from "./searchResults";
import PostContent from "./postContent";
import Home from "./home";
import Profile from "./Profile";
import MainDiary from "./diary";
import Coming from "./coming";
import history from "../history";
import Alert from "./alert";
import Comments from "./comments";
import "../styles/global.css";
import SignIn from "./signIn";
import SignUp from "./signUp";
import ChatRoom from "./chatRoom";
import CreateRoom from "./createRoom";
import SinglePost from "./singlePost";

const App = () => {
  useEffect(() => {
    const datePassed =
      Date.parse(new Date()) - Date.parse(localStorage.getItem("expiryDate")) >
      0;
    if (datePassed) {
      localStorage.setItem("isAuthenticated", "false");
    }
  }, []);
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
          <Route path={`/post/:id`} exact component={() => <SinglePost />} />
          <ProtectedRoute
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
            path={`/profile/:id`}
            exact
            component={() => (
              <>
                <Header />
                <Profile />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
            path={`/create/room`}
            exact
            component={() => (
              <>
                <Header />
                <CreateRoom />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
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
          <ProtectedRoute
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
          <ProtectedRoute
            path={`/diary`}
            exact
            component={() => (
              <>
                <Header />
                <MainDiary />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
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
          <ProtectedRoute
            path={`/chat`}
            exact
            component={() => (
              <>
                <Header />
                <ChatRoom />
                <Footer />
              </>
            )}
          />
          <Route path="*" exact component={() => <Redirect to="/feed" />} />
        </Switch>
      </Router>
    </section>
  );
};
export default App;
