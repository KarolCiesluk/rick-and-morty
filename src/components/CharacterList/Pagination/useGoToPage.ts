import { useReplaceQueryParameter } from "./useReplaceQueryParameter";

export const useGoToPage = () => {
  const replaceQueryParameter = useReplaceQueryParameter();

  return (pageNumber: number) => replaceQueryParameter({
    key: "page",
    value: pageNumber === 1 ? undefined : pageNumber.toString(),
  });
};