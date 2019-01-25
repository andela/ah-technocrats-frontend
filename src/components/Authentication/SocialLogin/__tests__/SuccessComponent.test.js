import React from 'react';
import { shallow } from 'enzyme';
import SuccessComponent from '../SuccessComponent';

describe('SuccessComponent', () => {
  it('checks that SemanticToastContainer is rendered', () => {
    const wrapper = shallow(<SuccessComponent success />);
    expect(wrapper.find('SemanticToastContainer').length).toEqual(1);
  });
});
