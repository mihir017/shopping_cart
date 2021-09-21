import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ShowStoreData from "./ShowStoreData";
import SingleProduct from "./SingleProduct";
import CartData from "./CartData";
import OrderData from "./OrderData";
import UserAddress from "./UserAddress";
import BuyProduct from "./BuyProduct";
import "./app.css";
import { fetchCartData } from "../action";
import { connect } from "react-redux";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.fetchCartLength();
  // }
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ShowStoreData />
          </Route>
          <Route path="/cartdata" exact>
            <CartData />
          </Route>
          <Route path="/myOrder" exact>
            <OrderData />
          </Route>
          <Route path="/cartdata/checkOut" exact component={UserAddress} />
          <Route path="/cartdata/buy/:id" exact component={UserAddress} />
          <Route
            path="/cartdata/checkOut/:email"
            exact
            component={BuyProduct}
          />
          <Route path="/cartdata/buy/:id/:email" exact component={BuyProduct} />
          <Route path="/:id" exact component={SingleProduct} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(null, { fetchCartData })(App);
