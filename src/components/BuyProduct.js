import React from "react";
import { connect } from "react-redux";
import { fetchSingleCartProduct } from "../action";
import ProductDetail from "./ProductDetail";
import ProductTotal from "./ProductTotal";

class BuyProduct extends React.Component {
  render() {
    console.log("->", this.props);
    // console.log("UserAddress in BuyProduct", this.props.userAddress);
    // console.log("single Product in BuyProduct", this.props.singleProduct);
    return (
      <div className="container">
        <h2 className="order_detail">Order Details</h2>
        <div className="divider_part">
          <div className="left_divider">
            <ProductDetail
              productDetails={
                this.props.match.params.id
                  ? this.props.singleProduct
                  : this.props.cartData
              }
              userDetail={this.props.userAddress}
            />
          </div>
          <div className="right_divider">
            <ProductTotal
              productDetails={
                this.props.match.params.id
                  ? this.props.singleProduct
                  : this.props.cartData
              }
              userDetail={this.props.userAddress}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    userAddress: state.userAddress,
    singleProduct: state.singleProduct,
    cartData: state.cartData,
  };
};
export default connect(mapStateToProps, { fetchSingleCartProduct })(BuyProduct);
