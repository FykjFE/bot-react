import React from 'react';
import list2tree from '../list2tree';

const list = [
  { id: '12', parentId: '0', text: 'Man', level: '1' },
  { id: '6', parentId: '12', text: 'Boy', level: '2' },
  { id: '7', parentId: '12', text: 'Other', level: '2' },
  { id: '9', parentId: '0', text: 'Woman', level: '1' },
  { id: '11', parentId: '9', text: 'Girl', level: '2' },
];
const tree = [
  {
    id: '12',
    parentId: '0',
    text: 'Man',
    level: '1',
    children: [
      { id: '6', parentId: '12', text: 'Boy', level: '2' },
      { id: '7', parentId: '12', text: 'Other', level: '2' },
    ],
  },
  {
    id: '9',
    parentId: '0',
    text: 'Woman',
    level: '1',
    children: [{ id: '11', parentId: '9', text: 'Girl', level: '2' }],
  },
];
describe('测试数组转树工具方法', () => {
  it('执行数组转树list2tree', () => {
    expect(list2tree(list, { pid: 'parentId' })).toEqual(tree);
  });
});
