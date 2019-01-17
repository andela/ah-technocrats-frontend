import axios from 'axios';

export const FORGOT_SUCCESS = 'Reset request success';

export const forgotSuccess = message => ({
  type: FORGOT_SUCCESS,
  message,
});

export const FORGOT_PROCESSING = 'Reset Processing';
export const forgotProcessing = processing => ({
  type: FORGOT_PROCESSING,
  processing,
});
export const FORGOT_FAILED = 'Reset request Failed';
export const forgotFailed = reason => ({
  type: FORGOT_FAILED,
  reason,
});

export const getErr = (resp) => {
  const respData = resp ? resp.data : null;
  const respDataUser = respData ? respData.user : null;
  const respDataUserError = respDataUser ? respDataUser.error : null;
  return respDataUserError || 'Something went wrong. Try again!';
};
export const forgotSubmitForm = email => (dispatch) => {
  dispatch(forgotProcessing(true));
  return axios.post('https://ah-technocrats.herokuapp.com/api/users/forgot_password/', {
    email,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    dispatch(forgotProcessing(false));
    dispatch(forgotSuccess(true));
    dispatch(forgotFailed(''));
  }).catch((error) => {
    dispatch(forgotProcessing(false));
    dispatch(forgotFailed(getErr(error.response)));
    dispatch(forgotSuccess(false));
  });
};
