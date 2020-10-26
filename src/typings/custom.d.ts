declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.jpeg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}
declare module '*.scss' {
  const styles: Record<string, string>;
  export default styles;
}

interface BaseAction<T> {
  type: string;
  payload: T;
}

interface Res<T> {
  code: number;
  data: T;
  message: string;
}

interface Req {
  id: string;
}

interface Routes {
  path: string;
  name: string;
  icon: string;
  children: Routes[];
  hidden: boolean;
  component: string;
}

/**
 * @name: Pageation
 * @current:当前页数
 * @pageSize:每页条数
 * @tatal:数据总数
 * @showQuickJumper:是否可以快速跳转至某页
 * @showSizeChanger:是否展示 pageSize 切换器
 */
interface Pageation {
  current?: number;
  pageSize?: number;
  total?: number;
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTotal?: (total: number) => string;
}
