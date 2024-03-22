import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(
  endpoint: string,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<T[]>(endpoint, { signal: controller.signal })
        .then((res) => {
          setData(res.data);
          console.log(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading };
};

export default useData;
