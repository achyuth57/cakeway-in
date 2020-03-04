import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { makeStyles } from "@material-ui/core/styles";
import "./navigation.scss";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#2a2a2a",
    textDecoration: "none"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[700]
        : theme.palette.grey[200]
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));
export default function NavigationBar({ currentUser }) {
  const classes = useStyles();
  return (
    <div className="nav-wrapper">
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link to="/">CakeWay.in</Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              to="cakes"
              className={classes.link}
            >
              Cakes
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="gifts"
              className={classes.link}
            >
              Gifts
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="flowers"
              className={classes.link}
            >
              Flowers
            </Link>
          </nav>
          <Button variant="outlined" className={classes.link}>
            {currentUser ? (
              <span onClick={() => auth.signOut()}>Log Out</span>
            ) : (
              <Link to="/login"> Login</Link>
            )}
          </Button>
          <Button color="primary" variant="outlined" className={classes.link}>
            <ShoppingCartIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
