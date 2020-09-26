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
