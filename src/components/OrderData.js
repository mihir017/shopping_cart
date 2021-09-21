import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../action";
import emptyCart from "./images/emptycart.png";

class OrderData extends React.Component {
  renderOrderData = () => {
    return this.props.placeOrder
      ?.map((order) => {
        return (
          <div key={order.email} className="orderCart">
            <div className="cartNavbar">
              <div className="orderPlaced">
                <p>Order Placed</p>
                <span>{order.orderDate}</span>
              </div>
              <div className="totalOrderPrice">
                <p>Total Price</p>
                <span>${order.orderPrice}</span>
              </div>
              <div className="deliver_to">
                <p>Deliver To</p>
                <span>{order.fullName}</span>
              </div>
              <div className="total_item">
                <p>Total Item</p>
                <span>{order.productDetails.length}</span>
              </div>
            </div>
            <div className="userOrderLists">
              {order.productDetails?.map((productDetail) => {
                return (
                  <div
                    className="product_card_detail"
                    key={productDetail.email}
                  >
                    <div className="product_img">
                      <img src={productDetail?.product_image} alt="img" />
                    </div>
                    <div className="product_body">
                      <h3>
                        <Link
                          to={`/${productDetail.id}`}
                          onClick={() =>
                            this.props.fetchSingleProduct(productDetail.id)
                          }
                        >
                          {productDetail.product_name}
                        </Link>
                      </h3>
                      <p className="cart-item">
                        Item : {productDetail?.cartItem}{" "}
                      </p>
                      <p className="product_price">
                        ${productDetail?.product_price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="card-update-btns">
              <Link to="/" className="carts-buy order-again">
                Continue Shopping
              </Link>
            </div>
          </div>
        );
      })
      .reverse();
  };

  render() {
    console.log(this.props.placeOrder);
    return (
      <div className="container">
        <h2 className="all-detail">My Orders</h2>

        {this.renderOrderData().length !== 0 && (
          <div className="order-cards">{this.renderOrderData()}</div>
        )}
        {this.renderOrderData().length === 0 && (
          <div className="cart_error">
            <img src={emptyCart} alt="emptyCart" />
            <button class="error_btn">
              <Link to="/">Shop Now</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    placeOrder: state.placeOrder,
  };
};
export default connect(mapStateToProps, {
  fetchSingleProduct,
})(OrderData);
