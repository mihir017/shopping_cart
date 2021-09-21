import React from "react";

const ProductDetail = ({ productDetails, userDetail }) => {
  const address = [
    userDetail?.address,
    userDetail?.city,
    userDetail?.state,
    userDetail?.pinCode,
  ];
  return (
    <div className="product_detail">
      <div className="user_detail">
        <h2 className="user_title_header">User Details</h2>
        <p className="user_name">
          Name : <span>{userDetail?.fullName}</span>
        </p>
        <p className="user_email">
          Email : <span>{userDetail?.email}</span>
        </p>
        <p className="user_phone">
          Mobile No : <span>{userDetail?.phone_no}</span>
        </p>
        <p className="user_address">
          Address : <span>{address.join(",")}</span>
        </p>
        <p>
          Payment Type : <span>{userDetail?.paymentType}</span>
        </p>
      </div>
      <p className="product-lists">Product Lists</p>
      {productDetails?.map((productDetail) => {
        return (
          <div className="product_card_detail" key={userDetail.email}>
            <div className="product_img">
              <img src={productDetail?.product_image} alt="img" />
            </div>
            <div className="product_body">
              <h3>{productDetail?.product_name}</h3>
              <p className="cart-item">Item : {productDetail?.cartItem} </p>
              <p className="product_price">${productDetail?.product_price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductDetail;
