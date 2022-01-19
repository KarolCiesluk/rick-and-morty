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