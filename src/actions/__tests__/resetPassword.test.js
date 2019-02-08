import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../resetPassword';
import {getErr} from "../resetPassword";

const middleWare = [thunk];
const mockStore = configureMockStore(middleWare);

describe("Reset password action", () => {
    describe('Reset password', () => {
        beforeEach(() => {
            moxios.install();
        });
        afterEach(() => {
            moxios.uninstall();
        });
        it('', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = true;
          const processing = true;
          const processingDone = false;
          const reason = "";
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_SUCCESS, message },
              { type: actions.RESET_FAILED, reason },
              { type: actions.RESET_COMPLETE, complete },
          ];
          const store = mockStore({ user: {}, expectedActions });

            return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Test catch error', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({
              response: {data:{
                  errors:{
                      password: [null]
                  }
              }
              }}, "Something went wrong. Try again");
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_FAILED, reason},
              { type: actions.RESET_SUCCESS, message},
              { type: actions.RESET_COMPLETE, complete },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Test catch Error', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({
              response: {data:{
                  Error:"Something went wrong. Try again"
              }
              }}, "Something went wrong. Try again");
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_FAILED, reason},
              { type: actions.RESET_SUCCESS, message},
              { type: actions.RESET_COMPLETE, complete },
          ];
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
        it('Test catch errors password', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = false;
          const processing = true;
          const processingDone = false;
          const reasons = getErr({
              response:{data:{
                  errors:{
                      password: ["Something went wrong. Try again"]
                  }
              }
              }}, "Something went wrong. Try again");
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_FAILED, reason: reasons},
              { type: actions.RESET_SUCCESS, message},
              { type: actions.RESET_COMPLETE, complete },
          ];
          console.log(expectedActions);
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
         it('Test catch errors ', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({
              response:{data:{

              }
              }}, "Something went wrong. Try again");
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_FAILED, reason},
              { type: actions.RESET_SUCCESS, message},
              { type: actions.RESET_COMPLETE, complete },
          ];
          console.log(expectedActions);
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
          it('Test catch errors ', () => {
          moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 400,
              response: { message: 'message'},
            });
          });

          const password = "SilasK@2019";
          const token = "Token";
          const message = false;
          const processing = true;
          const processingDone = false;
          const reason = getErr({
              data:{
              }
              }, "Something went wrong. Try again");
          const complete = true;
          const expectedActions = [
              { type: actions.RESET_PROCESSING, processing},
              { type: actions.RESET_PROCESSING, processing: processingDone},
              { type: actions.RESET_FAILED, reason},
              { type: actions.RESET_SUCCESS, message},
              { type: actions.RESET_COMPLETE, complete },
          ];
          console.log(expectedActions);
          const store = mockStore({ user: {}, expectedActions });
          return store.dispatch(actions.resetSubmitForm(password, token)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          },
          );
        });
    });

});
