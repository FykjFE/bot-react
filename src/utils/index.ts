const baseUrl = (): string => {
  switch (process.env.NODE_ENV) {
    case 'test':
      return 'https://api.zzfzzf.com';
    default:
      return 'https://api.zzfzzf.com';
  }
};
export default baseUrl();
