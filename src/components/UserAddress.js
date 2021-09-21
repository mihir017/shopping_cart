import React from "react";
import { connect } from "react-redux";
import {
  fetchUserAddress,
  fetchSingleCartProduct,
  fetchCartData,
} from "../action";

const email_valid =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class UserAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone_no: "",
      address: "",
      city: "",
      state: "",
      pinCode: "",
      paymentType: "",
      fullNameErr: "",
      emailErr: "",
      phone_noErr: "",
      addressErr: "",
      cityErr: "",
      stateErr: "",
      pinCodeErr: "",
    };
  }

  onHandleSubmit = async (e) => {
    e.preventDefault();
    await this.props.fetchUserAddress(this.state);
    this.props.match.params.id
      ? await this.props.fetchSingleCartProduct(this.props.match.params.id)
      : await this.props.fetchCartData();
    const url = this.props.match.params.id
      ? `buy/${this.props.match.params.id}/${this.state.email}`
      : `checkOut/${this.state.email}`;
    this.props.history.push(`/cartdata/${url}`);
    this.setState({
      fullName: "",
      email: "",
      pinCode: "",
      address: "",
      city: "",
      phone_no: "",
      state: "",
    });
  };

  onChangeField = (e) => {
    const { name, value } = e.target;
    if (
      name === "fullName" ||
      name === "city" ||
      name === "state" ||
      name === "address"
    ) {
      this.setState({ [name]: value }, () => {
        const err = this.state[name] < 1 ? `Please Fill the ${name} field` : "";
        this.setState({ [`${name}Err`]: err });
      });
    } else if (name === "phone_no") {
      this.setState({ [name]: value }, () => {
        const err =
          this.state[name].length !== 10
            ? `Phone number length should be 10.`
            : "";
        this.setState({ [`${name}Err`]: err });
      });
    } else if (name === "pinCode") {
      this.setState({ [name]: value }, () => {
        const err =
          this.state[name].length !== 6 ? `PIN-CODE length should be 6.` : "";
        this.setState({ [`${name}Err`]: err });
      });
    }
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value }, () => {
      let err = "";
      if (!this.state.email.length) {
        err = "Please Fill the email field.";
      } else if (!email_valid.test(this.state.email)) {
        err = "Email is not valid.";
      }
      this.setState({ emailErr: err });
    });
  };

  render() {
    const { fullName, email, phone_no, address, city, state, pinCode } =
      this.state;
    // console.log(this.props.match.params.id);
    return (
      <div className="container">
        <h2 className="buy-title">Fill the following Details</h2>
        <form onSubmit={this.onHandleSubmit}>
          <fieldset>
            <legend className="legend_user">User Details</legend>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                className={this.state.fullNameErr ? "errInput" : ""}
                type="text"
                onChange={this.onChangeField}
                value={fullName}
                name="fullName"
                placeholder="Enter the Name"
              />
              {this.state.fullNameErr && (
                <p className="errField">{this.state.fullNameErr}</p>
              )}
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="text"
                className={this.state.emailErr ? "errInput" : ""}
                onChange={this.onChangeEmail}
                value={email}
                name="email"
                placeholder="Enter the Email"
              />
              {this.state.emailErr && (
                <p className="errField">{this.state.emailErr}</p>
              )}
            </div>
            <div className="form-group">
              <label>Enter Phone_no</label>
              <input
                type="number"
                className={this.state.phone_noErr ? "errInput" : ""}
                onChange={this.onChangeField}
                value={phone_no}
                name="phone_no"
                placeholder="Enter the Phone_no"
              />
              {this.state.phone_noErr && (
                <p className="errField">{this.state.phone_noErr}</p>
              )}
            </div>
          </fieldset>
          <fieldset>
            <legend className="legend_user">User Address</legend>
            <div className="form-group">
              <label>Home Address</label>
              <input
                type="text"
                className={this.state.addressErr ? "errInput" : ""}
                onChange={this.onChangeField}
                value={address}
                name="address"
                placeholder="Enter the Home Address"
              />
              {this.state.addressErr && (
                <p className="errField">{this.state.addressErr}</p>
              )}
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className={this.state.cityErr ? "errInput" : ""}
                onChange={this.onChangeField}
                value={city}
                name="city"
                placeholder="Enter the City"
              />
              {this.state.cityErr && (
                <p className="errField">{this.state.cityErr}</p>
              )}
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className={this.state.stateErr ? "errInput" : ""}
                onChange={this.onChangeField}
                value={state}
                name="state"
                placeholder="Enter the State"
              />
              {this.state.stateErr && (
                <p className="errField">{this.state.stateErr}</p>
              )}
            </div>
            <div className="form-group">
              <label>Pin-Code</label>
              <input
                type="number"
                className={this.state.pinCodeErr ? "errInput" : ""}
                onChange={this.onChangeField}
                value={pinCode}
                name="pinCode"
                placeholder="Enter the Pin-Code"
              />
              {this.state.pinCodeErr && (
                <p className="errField">{this.state.pinCodeErr}</p>
              )}
            </div>
          </fieldset>
          <fieldset>
            <legend className="legend_user">Payment Type</legend>
            <div className="form-group radio-group">
              <label>Select Payment Type</label>
              <div>
                <input
                  type="radio"
                  name="paymentType"
                  onChange={(e) =>
                    this.setState({ paymentType: e.target.value })
                  }
                  value="case on delivery"
                />{" "}
                <span>Case On Delivery</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="paymentType"
                  value="online"
                  onChange={(e) =>
                    this.setState({ paymentType: e.target.value })
                  }
                />{" "}
                <span>Online</span>
              </div>
            </div>
          </fieldset>
          <button
            // to={`/cartdata/buy/${this.props.match.params.id}/${this.state.email}`}
            className="address-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  fetchUserAddress,
  fetchSingleCartProduct,
  fetchCartData,
})(UserAddress);
