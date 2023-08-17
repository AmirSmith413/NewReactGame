import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



 interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal,...requestConfig })
      .then((response) => {
        setIsLoading(false);
        setData(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {},[])
  return { data, error, isLoading };
};

export default useData