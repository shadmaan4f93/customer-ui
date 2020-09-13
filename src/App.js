import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Customer from "./components/Customer.js";
import CustomerDetail from "./components/CustomerDetail.js";
import CustomerUpdate from "./components/CustomerUpdate.js"

import "./assets/style/style.css"

function App() {
  return (
    <div className="custome-container">
      <Switch>
        <Redirect exact from="/" to="/customer" />
        <Route exact path="/customer" component={Customer} key='customer'/>
        <Route exact path="/customer/:id" component={CustomerDetail} key='customer-detail'/>
        <Route exact path="/customer/update/:id" component={CustomerUpdate} key='customer-update'/>
      </Switch>
    </div>
  );
}

export default App;
