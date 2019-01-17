import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../forgotPassword';
import {getErr} from "../forgotPassword";

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe("Forgot password action", () => {
    describe('Request password reset', () => {
        beforeEach(() => {
            moxios.install();
        });
        afterEach(() => {
            moxios.uninstall();
        });
        it("Should return Forgot Processing action", () => {
            const expectedAction = {
                type: actions.FORGOT_PROCESSING,
                processing: true
            };
            const action = actions.forgotProcessing(true);
            expect(action).toEqual(expectedAction);
        });
        it("Should return Forgot failed action", () => {
            const expectedAction = {
                type: actions.FORGOT_FAILED,
                reason: "Something went wrong"
            };
            const action = actions.forgotFailed("Something went wrong");
            expect(action).toEqual(expectedAction);
        });
        it("Should return Forgot success action", () => {
            const expectedAction = {
                type: actions.FORGOT_SUCCESS,
                message: false
            };
            const action = actions.forgotSuccess(false);
            expect(action).toEqual(expectedAction);
        });
        it('', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: { message: 'message'},
            });
          });

          const email = "silaskenneth1@gmail.com";


          const message = true;
          const processing = true;
          const processingDone = false;
          const reason = "";
          const expectedActions = [
              { type: actions.FORGOT_PROCESSING, processing},
              { type: actions.FORGOT_PROCESSING, processing: processingDone},
              { type: actions.FORGOT_SUCCESS, message },
              { type: actions.FORGOT_FAILED, reason },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.forgotSubmitForm(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Forgot password failure', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const email = "silaskenneth1@gmail.com";


          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = "Something went wrong. Try again!";
          const expectedActions = [
              { type: actions.FORGOT_PROCESSING, processing},
              { type: actions.FORGOT_PROCESSING, processing: processingDone},
              { type: actions.FORGOT_FAILED, reason },
              { type: actions.FORGOT_SUCCESS, message },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.forgotSubmitForm(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Forgot password failure no data', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const email = "silaskenneth1@gmail.com";

          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr(null);
          const expectedActions = [
              { type: actions.FORGOT_PROCESSING, processing},
              { type: actions.FORGOT_PROCESSING, processing: processingDone},
              { type: actions.FORGOT_FAILED, reason },
              { type: actions.FORGOT_SUCCESS, message },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.forgotSubmitForm(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Forgot password failure no user', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const email = "silaskenneth1@gmail.com";

          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({data:{}})
          const expectedActions = [
              { type: actions.FORGOT_PROCESSING, processing},
              { type: actions.FORGOT_PROCESSING, processing: processingDone},
              { type: actions.FORGOT_FAILED, reason },
              { type: actions.FORGOT_SUCCESS, message },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.forgotSubmitForm(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Forgot password failure no user data', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const email = "silaskenneth1@gmail.com";

          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({data:{user: {error:null}}})
          const expectedActions = [
              { type: actions.FORGOT_PROCESSING, processing},
              { type: actions.FORGOT_PROCESSING, processing: processingDone},
              { type: actions.FORGOT_FAILED, reason },
              { type: actions.FORGOT_SUCCESS, message },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.forgotSubmitForm(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
    });
});
