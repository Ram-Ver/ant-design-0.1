import React from "react";
import { Row, Col } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { connect } from "react-redux";

function Card(props) {
  const addTocartHandler = () => {
    props.dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
      })
    );
  };

  return (
    <>
      <Col
        xs={24}
        sm={24}
        md={12}
        lg={6}
        xl={4}
        xxl={4}
        key={props.id}
        className="card">
        <Row className="card-title-row">
          <Col span={12}>
            <Link className="card-title" to={`/product-detail/${props.id}`}>
              {props.title}
            </Link>
          </Col>
          <Col
            span={10}
            offset={2}
            className="card-rating-stars"
            justify="space-around"
            align="middle">
            {[...Array(props.rating)].map((star, index) => {
              return <StarFilled key={index} />;
            })}
            {[...Array(5 - props.rating)].map((star, index) => {
              return <StarOutlined key={index} />;
            })}
          </Col>
        </Row>

        <img
          className="card-product-image"
          alt="product-pic"
          src={props.image}
        />

        <h3 className="card-description">{props.description}</h3>

        <button
          className="card-cart-button"
          type="button"
          onClick={addTocartHandler}>
          Add to cart
        </button>

        <button className="card-buy-button" type="button">
          BUY <span className="card-price-tag currency">${props.price}</span>
        </button>
      </Col>
    </>
  );
}

export default connect()(Card);
