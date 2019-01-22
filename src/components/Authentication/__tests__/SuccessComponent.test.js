import React from 'react';
import { shallow } from 'enzyme';
import SuccessComponent from '../Login/SuccessComponent';

describe('SuccessComponentTest', () => {
  it('render the component if success is truthy', () => {
    const wrapper = shallow(<SuccessComponent />);
    expect(wrapper.find('SemanticToastContainer').length).toEqual(1);
  });
});
