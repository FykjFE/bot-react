const baseUrl = (): string => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return '/api';
    case 'test':
      return 'http://rap2.taobao.org:38080/app/mock/266457';
    default:
      return 'https://ry.zzfzzf.com';
  }
};
export default baseUrl();
