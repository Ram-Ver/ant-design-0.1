import React from "react";
import { connect } from "react-redux";
import productData from "../data/products";
function ProductDetail(props) {
  console.log(props.match.params.id, "props in 4");
  const product = productData.filter(
    (item) => item.id === parseInt(props.match.params.id)
  )[0];
  console.log(product);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10%",
      }}>
      <div>
        <h1 style={{ textAlign: "center" }}>{product.title}</h1>
        <img
          src={product.image}
          alt="product-Img"
          style={{ width: "500px", height: "350px", display: "block" }}
        />
        <p style={{ textAlign: "center" }}>{product.description}</p>
        <h1 style={{ textAlign: "center", color: "red" }}>${product.price}</h1>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps)(ProductDetail);
