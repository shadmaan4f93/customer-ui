import { ActionTypes } from '../types';


export const getCustomer = () => ({
  type: ActionTypes.GET_CUSTOMER,
});
export const getCustomerSuccess = (customers) => ({
  type: ActionTypes.GET_CUSTOMER_SUCCESS,
  payload: customers,
});
export const getCustomerError = (message) => ({
  type: ActionTypes.GET_CUSTOMER_ERROR,
  payload: { message },
});


export const getCustomerById = (id) => ({
  type: ActionTypes.GET_CUSTOMER_BYID,
  id:id
});
export const getCustomerByIdSuccess = (customer) => ({
  type: ActionTypes.GET_CUSTOMER_BYID_SUCCESS,
  payload: customer,
});
export const getCustomerByIdError = (message) => ({
  type: ActionTypes.GET_CUSTOMER_BYID_ERROR,
  payload: { message },
});

export const postCustomer = (customer) => ({
  type: ActionTypes.POST_CUSTOMER,
  customer:customer
});
export const postCustomerSuccess = (customer) => ({
  type: ActionTypes.POST_CUSTOMER_SUCCESS,
  payload: customer,
});
export const postCustomerError = (message) => ({
  type: ActionTypes.POST_CUSTOMER_ERROR,
  payload: { message },
});


export const putCustomer = (customer, id) => ({
  type: ActionTypes.PUT_CUSTOMER,
  customer: customer,
  id:id
});
export const putCustomerSuccess = (customer) => ({
  type: ActionTypes.PUT_CUSTOMER_SUCCESS,
  payload: customer,
});
export const putCustomerError = (message) => ({
  type: ActionTypes.PUT_CUSTOMER_ERROR,
  payload: { message },
});

export const deleteCustomer = (id) => ({
  type: ActionTypes.DELETE_CUSTOMER,
  id:id
});
export const deleteCustomerSuccess = (customer) => ({
  type: ActionTypes.DELETE_CUSTOMER_SUCCESS,
  payload: customer,
});
export const deleteCustomerError = (message) => ({
  type: ActionTypes.DELETE_CUSTOMER_ERROR,
  payload: { message },
});