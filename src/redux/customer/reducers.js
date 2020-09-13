import { ActionTypes } from '../types';

const INIT_STATE = {

};

export default (state = INIT_STATE, action) => {
  state.actionType = action.type;
  switch (action.type) {
    case ActionTypes.GET_CUSTOMER:
      return { ...state, getCustomerStatus: false, error: false };
    case ActionTypes.GET_CUSTOMER_SUCCESS:
      return { ...state, customers: action.payload, getCustomerStatus: true, error: false };
    case ActionTypes.GET_CUSTOMER_ERROR:
      return { ...state, getCustomerErrorMessage: action.payload, getCustomerStatus: false, error: true };

    case ActionTypes.GET_CUSTOMER_BYID:
      return { ...state, getCustomerByIdStatus: false, error: false };
    case ActionTypes.GET_CUSTOMER_BYID_SUCCESS:
      return { ...state, customer: action.payload, getCustomerByIdStatus: true, error: false };
    case ActionTypes.GET_CUSTOMER_BYID_ERROR:
      return { ...state, getCustomerByIdErrorMessage: action.payload, getCustomerByIdStatus: false, error: true };

    case ActionTypes.POST_CUSTOMER:
      return { ...state, postCustomerStatus: undefined, error: false };
    case ActionTypes.POST_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload, postCustomerStatus: true, error: false };
    case ActionTypes.POST_CUSTOMER_ERROR:
      return { ...state, postCustomerErrorMessage: action.payload, postCustomerStatus: false, error: true };
  
    case ActionTypes.PUT_CUSTOMER:
      return { ...state, putCustomerStatus: undefined, error: false };
    case ActionTypes.PUT_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload, putCustomerStatus: true, error: false };
    case ActionTypes.PUT_CUSTOMER_ERROR:
      return { ...state, putCustomerErrorMessage: action.payload, putCustomerStatus: false, error: true };
      

    case ActionTypes.DELETE_CUSTOMER:
      return { ...state, deleteCustomerStatus: false, error: false };
    case ActionTypes.DELETE_CUSTOMER_SUCCESS:
      return { ...state, customers: action.payload, deleteCustomerStatus: true, error: false };
    case ActionTypes.DELETE_CUSTOMER_ERROR:
      return { ...state, deleteCustomerErrorMessage: action.payload, deleteCustomerStatus: false, error: true };

    default:
      return { ...state };
  }
};
