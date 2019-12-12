import React from 'react';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import { expect } from 'chai';

import App from '../App';

describe('<App>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders default Text', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(2);
  });
});
