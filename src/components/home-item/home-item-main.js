import React from "react";

import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  image: {
    position: "relative",
    height: 250,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
    fontSize: "2rem",
    fontFamily: "Dancing Script",
    fontWeight: "bold"
  },
  imageMarked: {
    height: 3,
    width: 15,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));
const HomeItemMain = ({ title, image_url, width, history, linkUrl, match }) => {
  const classes = useStyles();
  return (
    <ButtonBase
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      focusRipple
      key={title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: width
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${image_url})`
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {title}
          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  );
};

export default withRouter(HomeItemMain);
