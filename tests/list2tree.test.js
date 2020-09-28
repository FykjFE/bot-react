import list2tree from '../src/utils/list2tree';

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
      { id: '6', parentId: '12', text: 'Boy', level: '2', children: null },
      { id: '7', parentId: '12', text: 'Other', level: '2', children: null },
    ],
  },
  {
    id: '9',
    parentId: '0',
    text: 'Woman',
    level: '1',
    children: [{ id: '11', parentId: '9', text: 'Girl', level: '2', children: null }],
  },
];
test('list2tree', () => {
  expect(list2tree(list, { pid: 'parentId' })).toBe(tree);
});
