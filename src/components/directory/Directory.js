import React, { Component } from "react";
import HomeItemMain from "../../components/home-item/home-item-main";

import "./Directory.scss";

class Directory extends Component {
  state = {
    sections: [
      {
        image_url:
          "https://images.unsplash.com/photo-1464348026323-e1ee90c7e56b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1237&q=80",
        title: "Birthday Cakes",
        width: "40%",
        linkUrl: "birthday"
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80",
        title: "Valentine Special",
        width: "30%",
        linkUrl: "valentine"
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1547778057-e5188f83549c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        title: "Occasion cakes",
        width: "30%",
        linkUrl: "occasion"
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
        title: "Anniversary Cakes",
        width: "50%",
        linkUrl: "anniversary"
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        title: "Event Special",
        width: "50%",
        linkUrl: "event"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.sections.map(({ ...otherProps }, index) => (
          <HomeItemMain key={index} {...otherProps} />
        ))}
      </React.Fragment>
    );
  }
}

export default Directory;
