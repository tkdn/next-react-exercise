import fetch from "node-fetch";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

export const useDataApi = (initialUrl: string, initialData: {} = {}): [
  {data: {}, isLoading: boolean, isError: boolean},
  Dispatch<SetStateAction<string>>
] => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const promise = await fetch(url, {mode: "cors"});
        const data = await promise.json();
        console.log(data);
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return [{data, isLoading, isError}, setUrl];
};
