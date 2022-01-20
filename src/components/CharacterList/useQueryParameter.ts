import { useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName: string) => {
  const { search } = useLocation();

  return (new URLSearchParams(search)).get(searchQueryParamName);
};