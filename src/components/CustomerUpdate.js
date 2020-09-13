import React, { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import SweetAlert from 'sweetalert-react';
import {getCustomerById} from "../redux/actions"
import CustomerCreateUpdate from "./CustomerCreateUpdate";

export default function CustomerUpdate(props) {
	const dispatch = useDispatch();
	const [alert, setAlert] = useState({ show: false, message: '', title:'' })
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
		if(response.customer.putCustomerStatus) {
      setAlert({ show: true, message: "Customer Updated Successfully", title: "Hi!" })
		} if(!response.customer.putCustomerStatus === undefined){
      setAlert({ show: true, message: "Customer Update Failed!", title: "Hi!" })
    }
	},[response.customer.putCustomerStatus]);


  useEffect(() => { 
		if(response.customer.getCustomerByIdStatus) {
      var customer = response.customer.customer
			setState(customer);
		}
	},[response.customer.getCustomerByIdStatus]);


	const closeAlert = () => {
		setAlert({ show: false })
		response.customer.putCustomerStatus = undefined
    props.history.push("/customer")
  }
	
  return (
		<div className="container">	
			<div className="card text-center header-text">
				<div className="card-header">
					Customer Update
				</div>
				<div className="card-body">
						{state.id ? 	<CustomerCreateUpdate history={props.history} formData={state} buttonText="Update"/>: <h1>Loading.....</h1>
						
						}
				</div>
				<SweetAlert
					show={alert.show}
					title={alert.title}
					text={alert.message}
					onConfirm={() => closeAlert()}
				/>
			</div>
		</div>
  );
};
