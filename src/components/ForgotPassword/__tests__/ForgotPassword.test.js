import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ForgotPassword from '../ForgotPassword';

Enzyme.configure({ adapter: new Adapter() });
const state = {
      error_no_match: null,
      error_empty_confirm: null,
      error_empty_new: null,
      invalid_form: true,
    };
const initialState = {
  processing: true,
  complete: false,
  failed: false,
  data: {},
  reason: '',
  message: false,
};
const fakeProps = {
    ...state,
    ...initialState

};
const fakeProps2 = {...fakeProps, processing: false};
const args = {args:fakeProps}
describe('Forgot Password', () => {
    it('Whole component Renders', () => {
    const wrapper = shallow(<ForgotPassword {...fakeProps} />);
    expect(wrapper.find('.aligned')).toBeDefined();
  });

    it('The processing renders', () => {
    const wrapper = shallow(<ForgotPassword  {...fakeProps2}/>);
    expect(wrapper.find('.aligned')).toBeDefined();
  });
});
