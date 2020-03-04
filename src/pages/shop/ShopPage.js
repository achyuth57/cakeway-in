import React, { Component } from "react";
import SHOP_DATA from "./shopData";
import PreviewStore from "../../components/previewStore/PreviewStore";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-list">
        {collections.map(({ ...itemDetails }, index) => (
          <PreviewStore key={index} {...itemDetails} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
