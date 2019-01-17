import {
  FORGOT_FAILED,
  FORGOT_PROCESSING,
  FORGOT_SUCCESS,
} from '../actions/forgotPassword';


const initialState = {
  processing: false,
  success: false,
  failed: false,
  done: false,
  data: {},
  reason: '',
  message: false,
};


const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_FAILED:
      return { ...state, reason: action.reason };
    case FORGOT_SUCCESS:
      return { ...state, message: action.message };
    case FORGOT_PROCESSING:
      return { ...state, processing: action.processing };
    default:
      return state;
  }
};

export default forgotPassword;
