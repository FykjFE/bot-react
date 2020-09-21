import { Routes } from '../store/constants/routes';

export default function flatRoute(route: Routes[]): Routes[] {
  const arr: Routes[] = [];
  route.forEach((item) => {
    if (item.children) {
      item.children.forEach((i: Routes) => {
        arr.push(i);
      });
    } else {
      arr.push(item);
    }
  });
  return arr;
}
