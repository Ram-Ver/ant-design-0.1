import React, { useEffect, useState, useRef } from "react";
import { Row } from "antd";
import Card from "../components/Card";
import { product, paginationOnProduct } from "../actions/productActions";
import "../custom.css";
import { connect } from "react-redux";
import MyCarousel from "../components/MyCarousel";
import { Spin, Space, Pagination } from "antd";
import { carosuelImages } from "../data/otherDate";

function Home(props) {
  const [loader, setLoader] = useState(true);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  console.log(props, "props in home component");
  useEffect(() => {
    console.log("useEffect called as ComeonentDidMount");
    props.dispatch(product());
  }, []);

  useEffect(() => {
    console.log("useEffect called as ComeonentDidUpdate");
    if (props.products.product.length < 1) {
      console.log("if called");
      setLoader(true);
    } else {
      console.log("else called");
      setLoader(false);
    }
  }, [props.products.product]);

  const paginationhandler = (page, pageSize) => {
    console.log(page, pageSize);
    console.log(start, end, "start and end");
    props.dispatch(paginationOnProduct(start, end));
    setStart(start + 3);
    setEnd(end + 3);
  };

  return props.products.loader ? (
    <Space size="large" className="loader">
      <Spin size="large" />
    </Space>
  ) : (
    <>
      <MyCarousel
        carosuelImages={carosuelImages}
        carouselImageStyle="carosuel-image"
      />
      <Row gutter={16} className="content">
        {props.products.product.slice(start, end).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Row>
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <Pagination
          onChange={paginationhandler}
          total={props.products.product.length}
          defaultPageSize={3}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.product,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Home);
