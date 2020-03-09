import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import CakesShopPage from "./pages/shop/ShopPage";
import SigninSignup from "./components/signin-signup/signin-signup";
import { withStyles, createStyles } from "@material-ui/styles";
import { auth, createuserProfileDocument } from "./firebase/firebase.util";

import Grid from "@material-ui/core/Grid";

import "./App.css";
import NavigationBar from "./components/navigation/navigation";

const styles = () =>
  createStyles({
    root: {
      flexGrow: 1
    },
    padding: {
      padding: "0 30px"
    }
  });

class App extends Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribefromAuth = null;
  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createuserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      } else this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    const { classes } = this.props;
    const { currentUser } = this.state;
    return (
      <Fragment>
        <NavigationBar currentUser={currentUser} />
        <Grid container className={classes.padding}>
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
export default withStyles(styles)(App);
