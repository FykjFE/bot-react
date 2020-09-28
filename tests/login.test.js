import React from 'react';
import { shallow } from 'enzyme';
import Demo from '../src/pages/home/Demo';

describe('<Demo /> with no props', () => {
  const container = shallow(<Demo />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('should have an email field', () => {
    expect(container.find('h1').length).toEqual(1);
  });

  it('should have proper props for email field', () => {
    expect(container.find('input[type="email"]').props()).toEqual({
      className: 'mx-auto my-2',
      onBlur: expect.any(Function),
      placeholder: 'email',
      type: 'email',
    });
  });

  it('should have a password field', () => {
    /* Similar to above */
  });
  it('should have proper props for password field', () => {
    /* Trimmed for less lines to read */
  });
  it('should have a submit button', () => {
    /* */
  });
  it('should have proper props for submit button', () => {
    /* */
  });
});
