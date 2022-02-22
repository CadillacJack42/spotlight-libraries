export const generateColumnNames = (pokedex) => {
  const keys = Object.keys(pokedex);
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

  console.log(columnNames);
  return columnNames;
};

export const getHeight = (pokemon) => {
  const height = pokemon.height.split('').slice(0, -2).join('');
  return height;
};
