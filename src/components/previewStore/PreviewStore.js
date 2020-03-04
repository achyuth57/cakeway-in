import React from "react";
import CollectionItem from "../collectionItem/CollectionItem";
import "./PreviewStore.scss";
const flexRow = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"
};
const PreviewStore = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h4>{title}</h4>
      <div style={flexRow}>
        {items.map(({ ...item }, index) => {
          return <CollectionItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default PreviewStore;
