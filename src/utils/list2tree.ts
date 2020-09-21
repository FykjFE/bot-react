interface Tree {
  id?: string;
  pid?: string;
  children?: string;
}

export default function list2tree(list: any[], options: Tree): any[] {
  const option = { id: 'id', pid: 'pid', children: 'children', ...options };
  return list.reduce((prev, curr) => {
    // 根据当前项找出父节点
    const obj = list.find((item) => item[option.id] === curr[option.pid]);
    // 存在父节点
    if (obj) {
      // 父节点无[children]属性，初始化[children]
      !Object.prototype.hasOwnProperty.call(obj, option.children) && (obj[option.children] = []);
      // 把当前节点推进父节点[children]
      obj[option.children].push(curr);
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);
}
