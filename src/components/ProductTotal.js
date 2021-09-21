import React from "react";
import { Link } from "react-router-dom";
import { fetchPlaceOrder, fetchCartProduct, fetchDeleteCart } from "../action";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { getCartTotalPrice } from "../Storage/localStorage";

const ProductTotal = ({
  productDetails,
  userDetail,
  fetchPlaceOrder,
  fetchCartProduct,
  fetchDeleteCart,
}) => {
  const totalPrice = getCartTotalPrice();
  const { id } = useParams();
  const makeOrder = async () => {
    if (id) {
      await fetchPlaceOrder({
        ...userDetail,
        productDetails,
        orderPrice: productDetails[0]?.product_price,
        orderDate: new Date().toLocaleDateString(),
      });
      await fetchCartProduct(productDetails[0]?.id, "remove");
    } else {
      await fetchPlaceOrder({
        ...userDetail,
        productDetails,
        orderPrice: totalPrice,
        orderDate: new Date().toLocaleDateString(),
      });
      await fetchDeleteCart("delete");
    }
  };

  const renderOneProductPrice = () => {
    return (
      <>
        <div className="original_price">
          <p>Original Price :</p>
          <span>
            {productDetails[0]?.product_price / productDetails[0].cartItem}
          </span>
        </div>
        <div className="total_item">
          <p>Total Item :</p>
          <span>{productDetails[0]?.cartItem}</span>
        </div>
        <hr />
        <div className="total_price">
          <p>Total Price :</p>
          <span>{productDetails[0]?.product_price}</span>
        </div>
      </>
    );
  };
  const renderAllProductPrice = () => {
    return (
      <>
        {productDetails.map((product_detail) => {
          return (
            <div className="original_price">
              <p className="cartProductName">
                {product_detail?.product_name} :
              </p>
              <div>
                <span className="cartProductItems">
                  {product_detail?.product_price / product_detail?.cartItem} x{" "}
                  {product_detail?.cartItem}
                </span>
                <p className="cartProductPrice">
                  {product_detail?.product_price}
                </p>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="total_price">
          <p>Total Price :</p>
          <span>{totalPrice}</span>
        </div>
      </>
    );
  };

  return (
    <div className="product_total">
      <h2 className="product_summary">Summary :</h2>
      {productDetails.length === 1
        ? renderOneProductPrice()
        : renderAllProductPrice()}
      <button onClick={makeOrder} className="place_order">
        <Link to="/" style={{ color: "white" }}>
          Place Order
        </Link>
      </button>
    </div>
  );
};
export default connect(null, {
  fetchPlaceOrder,
  fetchCartProduct,
  fetchDeleteCart,
})(ProductTotal);
