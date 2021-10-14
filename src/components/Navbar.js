import React from "react";
import {
    fetchBookData,
    fetchClotheData,
    fetchGadgetData,
    fetchShoesData,
    fetchStoreData,
    fetchCartData,
    fetchSearchData,
} from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
        };
    }
    componentDidMount() {
        if (localStorage.getItem("allStoreData")) {
            console.log("hi");
            this.props.fetchStoreData();
        }
    }
    chageSearchValue = (e) => {
        this.setState({ searchValue: e.target.value }, () => {
            this.state.searchValue
                ? this.props.fetchSearchData(this.state.searchValue)
                : this.props.fetchStoreData();
        });
    };
    render() {
        return (
            <div className="navbar">
                <nav className="container">
                    <Link to="/" className="logo">
                        iMarket
                    </Link>
                    <ul className="nav-list">
                        <li>
                            <form
                                className="search-form"
                                onSubmit={this.searchSubmit}
                            >
                                <input
                                    placeholder="search product..."
                                    type="text"
                                    value={this.state.searchValue}
                                    className="search-input"
                                    onChange={this.chageSearchValue}
                                />
                                <i className="fas fa-search search"></i>
                            </form>
                        </li>
                        <li className="nav-link myOrder">
                            <Link to="/myOrder">My Order</Link>
                            {this.props.placeOrder?.length > 0 ? (
                                <p className="cart_number">
                                    {this.props.placeOrder.length}
                                </p>
                            ) : (
                                ""
                            )}
                        </li>
                        <li className="nav-link all_cart">
                            <Link
                                to="/cartdata"
                                onClick={() => this.props.fetchCartData()}
                            >
                                Cart
                            </Link>
                            {this.props.cartProduct?.length > 0 ? (
                                <p className="cart_number">
                                    {this.props.cartProduct.length}
                                </p>
                            ) : (
                                ""
                            )}
                        </li>
                    </ul>
                </nav>
                <div className="product-category">
                    <div className="container">
                        <ul className=" nav-list product-list">
                            <li className="product-link">
                                <Link
                                    onClick={() => this.props.fetchStoreData()}
                                    to="/"
                                >
                                    All
                                </Link>
                            </li>
                            <li
                                className="product-link"
                                onClick={() =>
                                    this.props.fetchGadgetData("gadgets")
                                }
                            >
                                <Link to="/">Gadget</Link>
                            </li>
                            <li
                                className="product-link"
                                onClick={() =>
                                    this.props.fetchClotheData("clothes")
                                }
                            >
                                <Link to="/">Clothe</Link>
                            </li>
                            <li
                                className="product-link"
                                onClick={() =>
                                    this.props.fetchShoesData("shoes")
                                }
                            >
                                <Link to="/">Shoes</Link>
                            </li>
                            <li
                                className="product-link"
                                onClick={() =>
                                    this.props.fetchBookData("books")
                                }
                            >
                                <Link to="/">Book</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartProduct: state.cartProduct,
        placeOrder: state.placeOrder,
    };
};

export default connect(mapStateToProps, {
    fetchBookData,
    fetchClotheData,
    fetchGadgetData,
    fetchShoesData,
    fetchStoreData,
    fetchCartData,
    fetchSearchData,
})(Navbar);
