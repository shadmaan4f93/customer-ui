import React, { useState, useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import PropTypes from "prop-types";
import SweetAlert from 'sweetalert-react';
import {postCustomer, putCustomer} from "../redux/actions"
import TextField from '@material-ui/core/TextField';
import {EmailRegex} from "../utility/Regex"

import 'sweetalert/dist/sweetalert.css';

export default function CustomerCreateUpdate({history, formData,buttonText, onClose}) {
  const dispatch = useDispatch();
	const [alert, setAlert] = useState({ show: false, message: '', title:'' })
  const response = useSelector((state) =>{
		return state
	})

  useEffect(() => { 
		if(response.customer.postCustomerStatus) {
      setAlert({ show: true, message: "Customer Created Successfully", title: "Hi!" })
		} if(!response.customer.postCustomerStatus === undefined){
      setAlert({ show: true, message: "Customer Creation Failed!", title: "Hi!" })
    }
	},[response.customer.postCustomerStatus]);

  // internal state management
  const [customerState,setCustomerstate] = useState({
    name:formData.name||"",
    email:formData.email||"",
    phone:formData.phone||"",
    address:formData.address||"",
  })

  // validation state management
  const [customerTouched,setCustomerTouched] = useState({
    name:false,
    email:false,
    phone:false,
    address:false,
  })

  // helper text management
  const [formHelperText,setFormHelperText] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  })

  // field validation
  const validateFields = (name,value) => {
    let isValid = true;
    let error;
    switch (name) {
      case "name":
      case "phone":
      case "address":
        if(!value){
          isValid=false;
        }
        break;
      case "email":
      if(!value || !EmailRegex.test(value)){
        isValid=false;
        error="format: someone@example.com"
      }
      break;
      default:
        break;
    }
    return {isformValid:isValid,errs:error}
  }

  // form validation 
  const validateForm = () => {
    let isvalid = true;
    Object.keys(customerState).forEach(field => {
     const {isformValid} = validateFields(field,customerState[field]);
     if(!isformValid){
      isvalid = false;
     }
    });
    return isvalid
  };

  // form input handler
  const formInputHandler = (event) => {
    const {name,value} = event.target
    setCustomerstate({...customerState,[name]:value});
    setCustomerTouched({...customerTouched,[name]:true})
    const {errs} = validateFields(name,value)
    if(errs){
      setFormHelperText({
        ...formHelperText,
        [name]:errs
      })
    }
  }

  // form final processing
  const formProcessHandler = () => {
    const formValid = validateForm()
    if(formValid){
      switch (buttonText) {
        case "Create":
          dispatch(postCustomer(customerState));
          break;
        case "Update":
          dispatch(putCustomer(customerState,formData.id));
          break;
        default:
          break;
      }
    }else{
      setCustomerTouched({
        name:true,
        email:true,
        phone:true,
        address:true,
      })
    }
  }
  const closeAlert = () => {
    setAlert({ show: false })
    response.customer.postCustomerStatus = undefined
    window.location.reload()
    onClose(false)
  }

  return (
		<div>	
      <div>
        <TextField
          required
          className="m-r-7"
          id="name"
          name="name"
          value={customerState.name}
          label="Name"
          helperText={formHelperText.name}
          onChange = {formInputHandler}
          error={customerTouched.name && !customerState.name}
        />
        <TextField
          required
          className="m-r-7"
          id="email"
          name="email"
          value={customerState.email}
          label="Email"
          helperText={formHelperText.email}
          onChange = {formInputHandler}
          error={customerTouched.email && (!customerState.email ||!EmailRegex.test(customerState.email))}
        />
        <TextField
          required
          className="m-r-7"
          id="phone"
          name="phone"
          value={customerState.phone}
          label="Phone"
          helperText={formHelperText.phone}
          onChange = {formInputHandler}
          error={customerTouched.phone && !customerState.phone}
        />
        <TextField
          required
          className="m-r-7"
          id="address"
          name="address"
          value={customerState.address}
          label="Address"
          helperText={formHelperText.address}
          onChange = {formInputHandler}
          error={customerTouched.address && !customerState.address}
        />
      </div>
      <div>
        <button onClick={()=>{formProcessHandler()}} className="btn btn-secondary float-right m-t-20">{buttonText}</button>
      </div>
      <SweetAlert
        show={alert.show}
        title={alert.title}
        text={alert.message}
        onConfirm={() => closeAlert()}
      />
    </div>
  );
};
CustomerCreateUpdate.propTypes = {
  formData: PropTypes.object,
  buttonText:PropTypes.string,
  onClose: PropTypes.func
};

CustomerCreateUpdate.defaultProps = {
  formData: {},
  buttonText:"",
  onClose:null
};