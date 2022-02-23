import Graphs from './Graphs';
import Lines from './Lines';
import { pokedex, piekedex } from './pokeData';
import { generateColumnNames, getHeight, evolution } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie } from 'victory';
import './App.css';

function App() {
  evolution(pokedex[0]);
  const columnKeys = generateColumnNames();

  const pokeData = pokedex.map((pokemon) => {
    return {
      name: pokemon.name,
      height: getHeight(pokemon),
    };
  });

  const pokePie = piekedex.map((pokemon) => {
    return {
      x: pokemon.name,
      y: pokemon.spawn_chance,
    };
  });

  return (
    <div className="App">
      <h1>Cadillac Jacks Graphs</h1>
      <Graphs columns={columnKeys} rows={pokedex} />
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          style={{
            tickLabels: {
              fontSize: 10,
              angle: 45,
              padding: 15,
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          label={'Height in Meters'}
          style={{ axisLabel: { fontSize: 10, padding: 40 } }}
        />
        <VictoryBar
          data={pokeData}
          x="name"
          y="height"
          sortKey="height"
          sortOrder="ascending"
          alignment="end"
        />
      </VictoryChart>
      <h2>Chances of Spawning a Pokemon</h2>
      <VictoryPie
        name="Chance of Spawning"
        data={pokePie}
        labelPosition={'centroid'}
        style={{
          labels: {
            padding: 20,
            alignment: 'start',
          },
        }}
      />
      <Lines poke={pokedex[0]} />
      <Lines poke={pokedex[3]} />
      <Lines poke={pokedex[6]} />
    </div>
  );
}

export default App;
