import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./CollectionItem.scss";

const useStyles = makeStyles({
  root: {
    width: 300
  },
  media: {
    height: 220
  }
});

const CollectionItem = ({ name, image_url, price }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image_url} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="span">
            {price} /-
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className="cart_button swap">Order Now</Button>
      </CardActions>
    </Card>
  );
};

export default CollectionItem;
