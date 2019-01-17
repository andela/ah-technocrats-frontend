const commonResetForgot = stateAction => ({
  processing: stateAction.processing,
  complete: stateAction.complete,
  failed: stateAction.failed,
  done: stateAction.done,
  reason: stateAction.reason,
  message: stateAction.message,
});

export default commonResetForgot;
