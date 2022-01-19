const API_BASE = "https://rickandmortyapi.com/api";
const endpoints = {
  character: "/character",
};

export const getCharactersData = async (signal: AbortSignal) => {
  const response = await fetch(`${API_BASE}${endpoints.character}`, { signal });

  if (!response.ok) {
    throw new Error();
  }

  return await response.json();
};