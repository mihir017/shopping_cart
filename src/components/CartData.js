import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCartData, fetchCartProduct } from "../action";
import emptyCart from "./images/emptycart.png";

class CartData extends React.Component {
  componentDidMount() {
    this.props.fetchCartData();
  }
  updateCart = async (id, type) => {
    await this.props.fetchCartProduct(id, type);
    await this.props.fetchCartData();
  };

  renderCartData = () => {
    return this.props.cartData?.map(
      ({
        id,
        product_image,
        product_price,
        product_ratings,
        product_name,
        cartItem,
      }) => {
        return (
          <div key={id} className="cart">
            <div className="img">
              <img src={product_image} alt="img" />
            </div>
            <div className="cart-body">
              <h3 className="cart-title">
                <Link
                  to={`/${id}`}
                  onClick={() => this.props.fetchSingleProduct(id)}
                >
                  {product_name}
                </Link>
              </h3>
              <p className="cart-rating">Rating : {product_ratings} ⭐ </p>
              <h4 className="carts-price">$ {product_price}</h4>
              <div className="carts-btn">
                <div className="cart-repete">
                  <button onClick={() => this.updateCart(id, "decrese")}>
                    -
                  </button>
                  <p>{cartItem}</p>
                  <button
                    className="incre"
                    onClick={() => this.updateCart(id, "increse")}
                  >
                    +
                  </button>
                </div>
                <div className="card-update-btns">
                  <button
                    className="remove-cart"
                    onClick={() => this.updateCart(id, "remove")}
                  >
                    Remove cart
                  </button>
                  <Link to={`/cartdata/buy/${id}`} className="carts-buy">
                    &#128722; Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  };

  render() {
    // console.log(this.props.cartData);
    return (
      <div className="container">
        <h2 className="all-detail">Cart Details</h2>
        {this.renderCartData().length !== 0 && (
          <div className="cart-cards">{this.renderCartData()}</div>
        )}
        {this.renderCartData().length === 0 && (
          <div className="cart_error">
            <img src={emptyCart} alt="emptyCart" />
            <button class="error_btn">
              <Link to="/">Shop Now</Link>
            </button>
          </div>
        )}
        <button className="check_out">
          <Link to={`/cartdata/checkOut`} style={{ color: "aliceblue" }}>
            ✔ Check Out
          </Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartData: state.cartData,
    cartProduct: state.cartProduct,
  };
};
export default connect(mapStateToProps, {
  fetchCartData,
  fetchCartProduct,
})(CartData);
