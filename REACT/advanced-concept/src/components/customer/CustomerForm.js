import React, { Component } from "react";
import AuthContext from "../../context/AuthContext";

class CustomerForm extends Component {
  state = {
    data: ["Hola", "Mundo"],
  };

  static contextType = AuthContext;

  componentDidMount() {
    console.log("[CustomerForm--> componentDidMount]");
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log("CustomerForm -- getSnapshotBeforeUpdate");
    console.log(this.state);
    return { message: "Hello world!!" };
  }

  componentDidUpdate(prevProp, prevState, snapshout) {
    console.log("CustomerForm componentDidUpdate");
    console.log(snapshout);
  }

  render() {
    console.log("[CustomerForm--> render]");
    const { customer, onChange } = this.props;
    return (
      <>
        {this.context.authenticated ? (
          <form>
            <br />
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={customer.firstName}
              onChange={onChange}
            />
            <br />
            <hr />

            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={customer.lastName}
              onChange={onChange}
            />
            <br />
            <hr />

            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              value={customer.emailAddress}
              onChange={onChange}
            />
            <br />
            <hr />
          </form>
        ) : (
          <h1>You need to Login to use the application</h1>
        )}
      </>
    );
  }
}

export default CustomerForm;
