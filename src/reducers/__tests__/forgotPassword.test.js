import forgotPassword from '../forgotPassword';
import * as actions from '../../actions/forgotPassword';

describe('Forgot Password Reducer tests', () => {
    it('Forgot Password success action', () => {
        const initialState = {
           message: ''
        };
        const userData = {
            message: "That email does not exist."
        };
        // actions
        const action = actions.forgotSuccess(userData);
        const newState = forgotPassword(initialState, action);
        console.log(newState);
        expect(newState.message).toBe(userData);
    });
     it('Forgot failed action', () => {
        const initialState = {
           reason: "bh"
        };
        const userData = {
            reason: "Reset request Failed"
        };
        // actions
        const action = actions.forgotFailed(userData);
        const newState = forgotPassword(initialState, action);
        console.log(newState);
        expect(newState.reason).toBe(userData);
    });
     it('Forgot processing action', () => {
        const initialState = {
           processing: false
        };
        const userData = {
            processing: true
        };
        // actions
        const action = actions.forgotProcessing(userData);
        const newState = forgotPassword(initialState, action);
        console.log(newState);
        expect(newState.processing).toBe(userData);
    });

     it('Forgot empty action', () => {
        const initialState = {
           processing: true
        };
        // actions
        const newState = forgotPassword(initialState, {});
        expect(newState.processing).toBe(initialState.processing);
    });

     it('Forgot main action reducer', () => {
         const initialState = {
             "data": {},
             "done": false,
             "failed": false,
             "message": false,
             "processing": true,
             "reason": "",
             "success": false
         };
        // actions
        const newState = forgotPassword(initialState, {});
        expect(forgotPassword(undefined, actions.forgotProcessing(true))).toEqual(initialState);
    });
});
