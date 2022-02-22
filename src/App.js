import Graphs from './Graphs';
import { pokedex, piekedex } from './pokeData';
import { generateColumnNames, getHeight } from './data-utils';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie } from 'victory';
import './App.css';

function App() {
  console.log(pokedex);
  const columnKeys = generateColumnNames(pokedex[0]);

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
            angle: -45,
            padding: 20,
            alignment: 'start',
          },
        }}
      />
    </div>
  );
}

export default App;
