import { useEffect, useState } from "react";
import { AxiosPromise } from "axios";

export const useLoadDataAsync = <T>(
  fetchData: (options?: any) => AxiosPromise<T>,
  initialData: T,
  options?: any
) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function handleDataFetchAsync() {
      const response = await fetchData(options);
      setData(response.data);
      setIsLoading(false);
    }
    handleDataFetchAsync();
  }, []);
  return {
    data,
    isLoading,
  };
};
