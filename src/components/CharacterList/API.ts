const API_BASE = "https://rickandmortyapi.com/api";
const endpoints = {
  character: "/character",
};

export const getCharactersData = async (signal: AbortSignal, page: number) => {
  const response = await fetch(`${API_BASE}${endpoints.character}?page=${page}`, { signal });

  if (!response.ok) {
    throw new Error();
  }

  return await response.json();
};

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  status: "Dead" | "Alive" | "unknown";
}

export interface CharactersData {
  info: Info;
  results: Character[];
}