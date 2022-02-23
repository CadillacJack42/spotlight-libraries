import { pokedex } from './pokeData';

export const generateColumnNames = () => {
  const keys = Object.keys(pokedex[0]);
  const columnNames = keys.map((key) => {
    return {
      field: key,
      headerName: key
        .split('_')
        .map((name) => name[0].toUpperCase() + name.slice(1))
        .join(' '),
      width: 150,
    };
  });

  return columnNames;
};

export const getHeight = (pokemon) => {
  const height = pokemon.height.split('').slice(0, -2).join('');
  return height;
};

export const evolution = (pokemon) => {
  const evolutions = [
    {
      x: pokemon.name,
      y: Number(pokemon.weight.split('').slice(0, -3).join('')),
    },
  ];
  pokemon.next_evolution.map((poke) => {
    const evolution = Number(poke.num) - 1;
    const evolvedPoke = pokedex[evolution];
    evolutions.push({
      x: evolvedPoke.name,
      y: Number(evolvedPoke.weight.split('').slice(0, -3).join('')),
    });
  });
  return evolutions;
};
