const mirror = require("keymirror");

export const ActionTypes = mirror({
  GET_CUSTOMER: null,
  GET_CUSTOMER_SUCCESS: null,
  GET_CUSTOMER_ERROR: null,

  GET_CUSTOMER_BYID: null,
  GET_CUSTOMER_BYID_SUCCESS: null,
  GET_CUSTOMER_BYID_ERROR: null,

  POST_CUSTOMER: null,
  POST_CUSTOMER_SUCCESS: null,
  POST_CUSTOMER_ERROR: null,

  PUT_CUSTOMER: null,
  PUT_CUSTOMER_SUCCESS: null,
  PUT_CUSTOMER_ERROR: null,

  DELETE_CUSTOMER: null,
  DELETE_CUSTOMER_SUCCESS: null,
  DELETE_CUSTOMER_ERROR: null,
});


