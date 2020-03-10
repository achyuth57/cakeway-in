import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homePage/HomePage";
import CakesShopPage from "./pages/shop/ShopPage";
import SigninSignup from "./components/signin-signup/signin-signup";

import { auth, createuserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/userActions";
import Grid from "@material-ui/core/Grid";

import "./App.css";
import NavigationBar from "./components/navigation/navigation";

class App extends Component {
  unsubscribefromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <Grid container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/cakes" component={CakesShopPage} />
            <Route exact path="/gifts" component={CakesShopPage} />
            <Route exact path="/flowers" component={CakesShopPage} />
            <Route exact path="/login" component={SigninSignup} />
          </Switch>
        </Grid>
      </Fragment>
    );
  }
}
const mapDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchProps)(App);
