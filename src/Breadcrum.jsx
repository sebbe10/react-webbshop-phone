import React from "react";

function Breadcrum(props) {
  const { product } = props;
  return <div className="breadcrum">Home {product.name}</div>;
}

export default Breadcrum;
