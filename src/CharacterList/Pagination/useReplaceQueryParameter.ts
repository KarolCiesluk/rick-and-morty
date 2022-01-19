import { useSearchParams } from "react-router-dom";

interface KeyValuePair {
  key: string;
  value: string | undefined;
}

export const useReplaceQueryParameter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return ({ key, value }: KeyValuePair) => {
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    setSearchParams(searchParams);
  };
};