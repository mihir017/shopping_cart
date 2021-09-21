import React from "react";
import { connect } from "react-redux";
import {
  fetchStoreData,
  fetchSingleProduct,
  fetchCartProduct,
} from "../action";
import { Link } from "react-router-dom";

class ShowStoreData extends React.Component {
  constructor() {
    super();
    this.state = { isOrder: false };
  }
  // componentWillReceiveProps(newProps) {
  //   const isTrue = newProps.placeOrder
  //     ? !this.state.isOrder
  //     : this.state.isOrder;
  //   this.setState({ isOrder: isTrue }, () => {
  //     console.log("hiOrder=====>", this.state.isOrder);
  //   });
  // }
  addCart = async (id) => {
    await this.props.fetchCartProduct(id, "increse");
  };
  renderStoreData = () => {
    return this.props.storeData?.map(
      ({ id, product_image, product_price, product_ratings, product_name }) => {
        return (
          <div key={id} className="card">
            <div className="img">
              <img src={product_image} alt="img" />
            </div>
            <div className="card-body">
              <h3 className="card-title">
                <Link
                  to={`/${id}`}
                  onClick={() => this.props.fetchSingleProduct(id)}
                >
                  {product_name.split(" ").splice(0, 2).join(" ")}...
                </Link>
              </h3>
              <p className="rating">Rating : {product_ratings} ⭐ </p>
              <div className="card-btn">
                <h4 className="price">$ {product_price}</h4>
                <button className="card-cart" onClick={() => this.addCart(id)}>
                  &#128722; add Cart
                </button>
              </div>
            </div>
          </div>
        );
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="cards">{this.renderStoreData()}</div>
      </div>
    );
  }
}

const mapStateToPorps = (state) => {
  // console.log(state);
  return {
    storeData: state.storeData,
    cartProduct: state.cartProduct,
    placeOrder: state.placeOrder,
  };
};
export default connect(mapStateToPorps, {
  fetchStoreData,
  fetchSingleProduct,
  fetchCartProduct,
})(ShowStoreData);
