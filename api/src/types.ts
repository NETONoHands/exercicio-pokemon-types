type Pokemon = {
  id: number;
  name: string;
  types: string[];
};

type PokemonResponse = {
  id: number;
  name: string;
  types: string[];
  weakness: string[];
}

export type { Pokemon, PokemonResponse };
