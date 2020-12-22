import React, { useEffect, useState } from "react";
import { categories } from "../data/categories";
import products from "../data/products";
import {
  FilterOutlined,
  ShoppingCartOutlined,
  DeleteFilled,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  Input,
  Row,
  Col,
  Button,
  AutoComplete,
  Badge,
  Dropdown,
  Menu,
} from "antd";
import { Drawer } from "antd";
import { connect } from "react-redux";
import { removeToCart, removeAll } from "../actions/cartActions";
import { productLoToHigh, highToLowProduct } from "../actions/productActions";
import Avatar from "antd/lib/avatar/avatar";
const { Search } = Input;

function Categories(props) {
  const [visible, setVisible] = useState(false);
  const [options, setoptions] = useState([]);
  useEffect(() => {
    setoptions(products);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onSearch = (data) => {
    const matchData = props.products.product.filter((item) => {
      return item.title.indexOf(data) > -1;
    });
    console.log(matchData, "match data");
    setoptions(matchData);
  };

  const highToLowHandler = () => {
    const highToLow = props.products.product
      .sort((a, b) => a.price - b.price)
      .reverse();
    props.dispatch(highToLowProduct(highToLow));
  };

  const lowToHighHandler = () => {
    const lowToHigh = props.products.product.sort((a, b) => a.price - b.price);
    props.dispatch(productLoToHigh(lowToHigh));
  };

  const filterDropdown = (
    <Menu>
      <Menu.SubMenu>
        <Menu.ItemGroup>
          <Menu.Item onClick={lowToHighHandler}>Low to high</Menu.Item>
          <Menu.Item onClick={highToLowHandler}>high to low</Menu.Item>
        </Menu.ItemGroup>
      </Menu.SubMenu>
      <Menu.Item>Price</Menu.Item>
      <Menu.Item>Sort by a-z</Menu.Item>
    </Menu>
  );

  return (
    <div className="categories">
      <Row className="main-row">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <AutoComplete
            dropdownMatchSelectWidth={true}
            options={options.map((item) => new Object({ value: item.title }))}
            className="auto-complete"
            onSearch={onSearch}>
            <Search placeholder="input search text" enterButton allowClear />
          </AutoComplete>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Dropdown
            overlay={filterDropdown}
            placement={"bottomLeft"}
            trigger={["click"]}>
            <Button type="button" style={{ float: "left" }}>
              <FilterOutlined />
            </Button>
          </Dropdown>
          <div
            style={{
              height: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}>
            {categories.map((item, index) => {
              return (
                <div
                  className="categories-list"
                  style={{ display: "inline" }}
                  key={index}>
                  {item.name}
                </div>
              );
            })}
          </div>
          <div style={{ float: "right" }}>
            <Badge count={props.cart.length}>
              <Button type="primary" onClick={showDrawer}>
                <ShoppingCartOutlined />
              </Button>
            </Badge>
          </div>

          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
            style={{ marginTop: "64px" }}>
            <div style={{ width: "100%", backgroundColor: "red" }}>
              <CloseCircleOutlined
                onClick={onClose}
                style={{ fontSize: "25px", float: "right" }}
              />
            </div>
            {props.cart.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    margin: "20px",
                    textAlign: "center",
                  }}>
                  <Avatar src={item.cartData.image} size={15} />
                  <span style={{ margin: "0 10px", fontSize: "15px" }}>
                    {item.cartData.title}
                  </span>
                  <DeleteFilled
                    onClick={() => {
                      props.dispatch(removeToCart(item.cartData.id, index));
                    }}
                  />
                </div>
              );
            })}
            {props.cart.length < 1 ? (
              <p style={{ color: "gray" }}>Your cart is Empty</p>
            ) : (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    border: "2px solid black",
                    width: "50%",
                    padding: "5px",
                    margin: "5% 25%",
                  }}>
                  Qty : {props.cart.length}
                </div>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    border: "none",
                    borderRadius: "5px",
                  }}
                  onClick={() => {
                    props.dispatch(removeAll());
                  }}>
                  Remove All
                </button>
              </div>
            )}
          </Drawer>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    products: state.product,
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Categories);
