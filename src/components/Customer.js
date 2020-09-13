import React, { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import SweetAlert from 'sweetalert-react';
import DataTable from 'react-data-table-component';
import {getCustomer, deleteCustomer} from "../redux/actions"

import Modal from "./Modal.js";
import CustomerCreateUpdate from "./CustomerCreateUpdate";
import 'sweetalert/dist/sweetalert.css';

export default function Customer(props) {
  const dispatch = useDispatch();
	const [state, setState] = useState([])
	const [alert, setAlert] = useState({ show: false, message: '', title:'' })
	const [modalstate, setModalstate] = useState({
    isOpen: false
  })
  
  useEffect(() => {
		dispatch(getCustomer());
  },[]);
  
  const response = useSelector((state) =>{
		return state
	})
	
	const toggleModal = () => {
    setModalstate({
      isOpen: !modalstate.isOpen
    });
	}

	const customerDelete = (id) => {
		dispatch(deleteCustomer(id));
	}
	useEffect(() => { 
		if(response.customer.deleteCustomerStatus) {
			setAlert({ show: true, message: "Customer Deleted Successfully", title: "Hi!" })
			dispatch(getCustomer());
		}
	},[response.customer.deleteCustomerStatus]);

  useEffect(() => { 
		if(response.customer.getCustomerStatus) {
			var customers = response.customer.customers
			setState(
				customers.map((prop, key) => {
					return {
						id: key,
						name: prop["name"],
						email: prop["email"],
						phone: prop["phone"],
						address: prop["address"],
						created_at: prop["created_at"],
						actions: (
							<div className="action-button">
								<button className="btn btn-secondary btn-sm" style={{marginRight: "5px"}}
									onClick={() => {
										let customerId = prop["id"]
										props.history.push('/customer/'+customerId+'')
									}}
								> <i className="fa fa-eye" aria-hidden="true"></i> </button>
								<button className="btn btn-secondary btn-sm" style={{marginRight: "5px"}}
									onClick={() => {
										let customerId = prop["id"]
										props.history.push('/customer/update/'+customerId+'')
									}}
								> <i className="fa fa-pencil" aria-hidden="true"></i> </button>
								<button className="btn btn-secondary btn-sm"
									onClick={() => {
										customerDelete(prop["id"])
									}}
								> <i className="fa fa-trash-o" aria-hidden="true"></i> </button>
							</div>
						)
					};
				})
			);
		}
	},[response.customer.getCustomerStatus]);

	const columns = [
		{
			name: 'Name',
			selector: 'name',
    	sortable: true,
		},
		{
			name: 'Email',
			selector: 'email',
    	sortable: true,
		},
		{
			name: 'Phone',
			selector: 'phone',
		},
		{
			name: 'Address',
			selector: 'address',
		},
		{
			name: "Created Date",
			selector: 'created_at',
    	sortable: true,
		},
		{
			name: "Actions",
			selector: 'actions',
		}
	];

  return (
		<div>	
			<div className="header-text center"> <h1>Customer Listing</h1></div>
			<button	onClick={() => {toggleModal()}} className="btn btn-secondary">Add Customer</button>
			<DataTable
				columns={columns}
				data={state}
				theme="solarized"
			/>
			<SweetAlert
        show={alert.show}
        title={alert.title}
        text={alert.message}
        onConfirm={() => setAlert({ show: false })}
      />
			<Modal show={modalstate.isOpen} onClose={() => {toggleModal(false)}}>
				<CustomerCreateUpdate buttonText="Create" onClose={() => {toggleModal()}}/>
      </Modal>
		</div>
  );
};
