import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './components/List'

function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        setList(res.data.results)
      })
  }, [])

  return (
    <div className="App">
      {list.map(el => {
        return <List name={el.name} />
      })}
    </div>
  );
}

export default App;
