import useAxios from '../hooks/useAxios'
import Poke from './Poke'

const PokeDex = () => {
    const [pokemon, _setPokemon] = useAxios('https://pokeapi.co/api/v2/pokemon/', 'results')

    return (
        <div>
            <h1>PokeDex</h1>
            {pokemon.map(poke => {
                return (
                    <Poke key={poke.name} poke={poke}/>
                )
            })}
        </div>
    )
}

export default PokeDex