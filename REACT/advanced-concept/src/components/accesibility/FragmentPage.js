import React, { Fragment } from "react";
import customerData from "../../customer.data.json";

/*
Very useful to group element
*/

const FragmentPage = () => {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
          </tr>
        </thead>

        <tbody>
          {customerData.map((customer) => {
            return (
              <Fragment key={customer.id}>
                <tr>
                  <td>{customer.id}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.emailAddress}</td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default FragmentPage;
