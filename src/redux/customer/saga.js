import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';

import axiosInstance  from "../../service/request.js";

import { ActionTypes } from '../types';
import {
  getCustomerSuccess,
  getCustomerError,
  getCustomerByIdSuccess,
  getCustomerByIdError,
  postCustomerSuccess,
  postCustomerError,
  putCustomerSuccess,
  putCustomerError,
  deleteCustomerSuccess,
  deleteCustomerError
} from './actions';

// To get customers
const getCustomerAsync = () => axiosInstance.get('api/customer/');
function* getCustomers() {
  try {
    const { data } = yield call(getCustomerAsync);
    yield put(getCustomerSuccess(data));
  } catch (error) {
    yield put(getCustomerError(error));
  }
}
export function* watchGetCustomer() {
  yield takeEvery(ActionTypes.GET_CUSTOMER, getCustomers);
}

// To get customer by id
const getCustomerByIdAsync = (id) => axiosInstance.get('api/customer/'+id+'/');
function* getCustomerById(payload) {
  try {
    const { data } = yield call(getCustomerByIdAsync, payload["id"]);
    yield put(getCustomerByIdSuccess(data));
  } catch (error) {
    yield put(getCustomerByIdError(error));
  }
}
export function* watchGetCustomerById() {
  yield takeEvery(ActionTypes.GET_CUSTOMER_BYID, getCustomerById);
}

// To create customer
const createCustomerAsync = (customer) => axiosInstance.post('api/customer/', customer);
function* createCustomer(payload) {
  try {
    yield call(createCustomerAsync, payload["customer"]);
    yield put(postCustomerSuccess({"message": "Customer created successfully"}));
  } catch (error) {
    yield put(postCustomerError(error));
  }
}
export function* watchCreateCustomer() {
  yield takeEvery(ActionTypes.POST_CUSTOMER, createCustomer);
}

// To update customer
const updateCustomerAsync = (customer, id) => axiosInstance.put('api/customer/'+id+'/', customer);
function* updateCustomer(payload) {
  try {
    const {data} = yield call(updateCustomerAsync, payload["customer"], payload["id"]);
    yield put(putCustomerSuccess({"message": "Customer Updated successfully"}));
  } catch (error) {
    yield put(putCustomerError(error));
  }
}
export function* watchUpdateCustomer() {
  yield takeEvery(ActionTypes.PUT_CUSTOMER, updateCustomer);
}

// To delete customer
const deleteCustomerAsync = (id) => axiosInstance.delete('api/customer/'+id+'/');
function* deleteCustomer(payload) {
  try {
    yield call(deleteCustomerAsync, payload["id"]);
    yield put(deleteCustomerSuccess({"message": "Customer deleted successfully"}));
  } catch (error) {
    yield put(deleteCustomerError(error));
  }
}
export function* watchDeleteCustomer() {
  yield takeEvery(ActionTypes.DELETE_CUSTOMER, deleteCustomer);
}


export default function* rootSaga() {
  yield all([
    fork(watchGetCustomer),
    fork(watchDeleteCustomer),
    fork(watchGetCustomerById),
    fork(watchCreateCustomer),
    fork(watchUpdateCustomer)
  ]);
}
