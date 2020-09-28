import React from 'react';
import Demo from '../src/pages/home/Demo';
import { shallow } from 'enzyme';

describe('<Demo /> with no props', () => {
  it('test', () => {
    const component = shallow(<Demo name={'1'} />);
    const wrapper = component.find('h1');
    expect(wrapper.length).toBe(1);
  });
});
