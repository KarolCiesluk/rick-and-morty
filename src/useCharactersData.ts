import { useEffect, useState } from "react";

import { CharactersData } from "./interfaces";

const useCharactersData = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [charactersData, setCharactersData] = useState<CharactersData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setCharactersData(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        console.error(error);
      }
    })();
  }, []);

  return [status, charactersData] as const;
};

export default useCharactersData;