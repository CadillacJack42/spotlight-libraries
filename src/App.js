import Graphs from './Graphs';
import { pokedex } from './pokeData';
import { generateColumnNames } from './data-utils';
import './App.css';

function App() {
  console.log(pokedex);
  const columnKeys = generateColumnNames(pokedex[0]);
  // const rowDataRaw = generateRowData(pokedex[0]);

  return (
    <div className="App">
      <Graphs columns={columnKeys} rows={pokedex} />
    </div>
  );
}

export default App;
