import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import UpdateComponent from '../Articles/UpdateComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<UpdateComponent />', () => {
  const onSubmit = jest.fn();
  const props = {
    error: {
      title: [],
    },
    onSubmit,
  };
  it('should match the snapshot', () => {
    const component = shallow(<UpdateComponent {...props} />);
    expect(component).toMatchSnapshot();
  });
});
