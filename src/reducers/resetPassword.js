import {
  RESET_COMPLETE,
  RESET_FAILED,
  RESET_PROCESSING,
  RESET_SUCCESS,
} from '../actions/resetPassword';


const initialState = {
  processing: false,
  complete: false,
  failed: false,
  data: {},
  reason: '',
  message: false,
};


const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_COMPLETE:
      return { ...state, done: action.done, message: false };
    case RESET_FAILED:
      return { ...state, reason: action.reason, message: false };
    case RESET_SUCCESS:
      return { ...state, message: action.message };
    case RESET_PROCESSING:
      return { ...state, processing: action.processing };
    default:
      return state;
  }
};

export default resetPassword;
