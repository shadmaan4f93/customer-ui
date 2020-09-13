import React, { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import moment from "moment";
import {getCustomerById} from "../redux/actions"

export default function CustomerDetail(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({})
  
  useEffect(() => {
    // Get customer id from url
    let id = props.match.params.id
		dispatch(getCustomerById(id));
  },[]);

  const response = useSelector((state) =>{
		return state
	})

  useEffect(() => { 
		if(response.customer.getCustomerByIdStatus) {
      var customer = response.customer.customer
			setState(customer);
		}
	},[response.customer.getCustomerByIdStatus]);

  return (
		<div className="container">	
      {state ?  <div>
        <div className="card text-center header-text">
          <div className="card-header">
            Customer Detail
          </div>
          <div className="card-body">
            <h5 className="card-title">{state.name}</h5>
            <div className="row" style={{padding:"50px"}}>
              <div className="col-sm-6">
                <span>Email: {state.email}</span>
              </div>
              <div className="col-sm-6">
                <span>Phone: {state.phone}</span>
              </div>
              <div className="col-sm-6">
                <span>Created Date: {`${moment(state.created_at).format("LLLL")}`}</span>
              </div>
              <div className="col-sm-6">
                <span>Address: {state.address}</span>
              </div>
            </div>
            <a href="/customer" class="btn btn-secondary" style={{marginRight:"20px"}}>Back to customer</a>
            <a href={'/customer/update/'+ state.id} class="btn btn-secondary">Edit</a>
          </div>
        </div>
      </div>: <div className="card">
        <h1>No data</h1>
      </div>
      }
		</div>
  );
};
