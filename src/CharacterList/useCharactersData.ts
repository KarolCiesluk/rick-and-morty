import { useEffect, useState } from "react";

import { getCharactersData } from "./API";
import { CharactersData } from "./interfaces";

const useCharactersData = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [charactersData, setCharactersData] = useState<CharactersData | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    (async () => {
      try {
        const data = await getCharactersData(signal);

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
  }, []);

  return [status, charactersData] as const;
};

export default useCharactersData;