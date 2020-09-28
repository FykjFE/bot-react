import React from 'react';
import userReducer from '../userReducer';
import { login } from '../../actions/user';

describe('测试store---用户', () => {
  it('执行数组转树list2tree', () => {
    const state = { isLogin: true, info: {} };
    const expected = { isLogin: false, info: {} };

    const result = userReducer(state, login());

    expect(result).toEqual(expected);
  });
});
