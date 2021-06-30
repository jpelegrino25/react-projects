import React, { Component } from "react";
import customerData from "../../customer.data.json";
import CustomerForm from "./CustomerForm";
import AuthContext from "../../context/AuthContext";

const defaultCustomer = {
  id: -1,
  firstName: "",
  lastName: "",
  emailAddress: "",
};

class CustomerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: defaultCustomer,
      show: false,
      authenticated: false,
    };
  }

  componentDidMount() {
    console.log("[CustomerPage-- componentDidMount]");

    if (customerData.length > 0) this.setState({ customer: customerData[0] });
  }

  shouldComponentUpdate(prevProps, prevState) {
    return true;
  }

  showForm = () => {
    this.setState({ show: true });
  };

  fieldChange = (e) => {
    const { name, value } = e.target;
    let customer = { ...this.state.customer, [name]: value };
    this.setState({ customer });
  };

  loginClick = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[CustomerPage-- render]");
    return (
      <>
        <h1>Customer Page</h1>
        <button onClick={this.showForm}>Show Customer Form</button>
        <button onClick={this.loginClick}>Login</button>
        {this.state.show && (
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginClick,
            }}
          >
            <CustomerForm
              customer={this.state.customer}
              onChange={this.fieldChange}
            />
          </AuthContext.Provider>
        )}
      </>
    );
  }
}

function test(person) {
  console.log(person.firstName);
}

export default CustomerPage;
