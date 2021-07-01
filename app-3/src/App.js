import './App.css';
import routes from './routes'
import PokeDex from './components/PokeDex'

function App() {
  return (
    <div className="App">
      {/* <PokeDex /> */}
      {routes}
    </div>
  );
}

export default App;
