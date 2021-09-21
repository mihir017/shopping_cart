/* eslint-disable no-lone-blocks */
import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct, fetchCartProduct } from "../action";

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchSingleProduct(this.props.match.params.id);
  }
  addCart = async (id) => {
    await this.props.fetchCartProduct(id, "increse");
  };
  render() {
    const { product } = this.props;
    console.log(this.props.product);
    return (
      <div className="singleProduct">
        <div className="product_img">
          <img src={product[0]?.product_image} alt="product_img" />
        </div>
        <div className="product_details">
          <h2 className="product_name">{product[0]?.product_name}</h2>
          <span className="product_rating">
            Rating : {product[0]?.product_ratings} ⭐{" "}
          </span>{" "}
          |
          <span className="product_stock">
            Stock : {product[0]?.product_stock}{" "}
          </span>
          <div className="product_btn">
            <h4 className="product_price">$ {product[0]?.product_price}</h4>
            <button
              className="product_cart"
              onClick={() => this.addCart(product[0]?.id)}
            >
              &#128722; add Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    product: state.singleProduct,
  };
};
export default connect(mapStateToProps, {
  fetchSingleProduct,
  fetchCartProduct,
})(SingleProduct);
