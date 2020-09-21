import { useEffect, useState } from 'react';

interface HttpType {
  data: any;
  loading: boolean;
}
function useHttp(request: any): HttpType {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  async function doRequest() {
    const r = await request;
    setLoading(false);
    setData(r.result);
  }
  useEffect(() => {
    doRequest();
  }, []);
  return { data, loading };
}

export default useHttp;
