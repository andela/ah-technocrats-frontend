import axios from 'axios';

export const RESET_SUCCESS = 'Reset success';

export const resetSuccess = message => ({
  type: RESET_SUCCESS,
  message,
});

export const RESET_PROCESSING = 'Reset Processing';
export const resetProcessing = processing => ({
  type: RESET_PROCESSING,
  processing,
});
export const RESET_FAILED = 'Reset Failed';
export const resetFailed = reason => ({
  type: RESET_FAILED,
  reason,
});
export const RESET_COMPLETE = 'Reset complete';

export const resetComplete = complete => ({
  type: RESET_COMPLETE,
  complete,
});

export const getErr = (error, defaultMessage) => {
  const errorResponseData = error.response ? error.response.data : null;
  if (errorResponseData === null) return defaultMessage;
  const errorResponseErrors = errorResponseData.errors;
  const errorResponseErrorsPassword = errorResponseErrors
    ? errorResponseErrors.password[0] : null;
  if (errorResponseErrorsPassword) return errorResponseErrorsPassword;
  return errorResponseData.Error ? errorResponseData.Error : defaultMessage;
};
export const resetSubmitForm = (data, token) => (dispatch) => {
  dispatch(resetProcessing(true));
  return axios.put(`https://ah-technocrats.herokuapp.com/api/users/change_password/${token}`, {
    password: data,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => {
    dispatch(resetProcessing(false));
    dispatch(resetSuccess(true));
    dispatch(resetFailed(''));
    dispatch(resetComplete(true));
  }).catch((e) => {
    dispatch(resetProcessing(false));
    dispatch(resetFailed(getErr(e, 'Something went wrong. Try again')));
    dispatch(resetSuccess(false));
    dispatch(resetComplete(true));
  });
};
