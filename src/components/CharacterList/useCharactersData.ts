import { useEffect, useState } from "react";

import { CharactersData, getCharactersData } from "./API";

const useCharactersData = (currentPage: number) => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [charactersData, setCharactersData] = useState<CharactersData | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => {
      try {
        const data = await getCharactersData(signal, currentPage);

        setCharactersData(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [currentPage]);

  return [status, charactersData] as const;
};

export default useCharactersData;