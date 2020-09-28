import React from 'react';
import { shallow } from 'enzyme';
import Svg from '../src/components/Svg';

describe('<Svg />', () => {
  it('test', () => {
    const component = shallow(<Svg name={'error'} />);
    console.log(component);
    const wrapper = component.find('h1');
    expect(wrapper.length).toBe(1);
  });
});
