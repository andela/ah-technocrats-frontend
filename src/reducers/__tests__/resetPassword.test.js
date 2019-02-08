import resetPassword from '../resetPassword';
import * as actions from '../../actions/resetPassword';
describe('Reset password Reducer tests', () => {
    it('Reset password default reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const action = actions.resetComplete(false);
        const newState = resetPassword(undefined,action);
        expect(newState).toEqual(initialState);
    });
    it('Reset password complete reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const action = actions.resetComplete(false);
        const newState = resetPassword(initialState,action);
        expect(newState).toEqual(initialState);
    });
    it('Reset password undefined action reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const newState = resetPassword(initialState,{});
        expect(newState).toEqual(initialState);
    });
    it('Reset password processing reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const action = actions.resetProcessing(true);
        const newState = resetPassword(initialState,action);
        expect(newState.processing).toBe(true);
    });
    it('Reset password failed reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const action = actions.resetFailed('Just failed');
        const newState = resetPassword(initialState,action);
        expect(newState.reason).toBe('Just failed');
    });
    it('Reset password success reducer', () => {
        const initialState = {
            processing: false,
            complete: false,
            failed: false,
            data: {},
            reason: '',
            message: false,
        };
        const action = actions.resetSuccess(true);
        const newState = resetPassword(initialState,action);
        expect(newState.message).toBe(true);
    });
});
