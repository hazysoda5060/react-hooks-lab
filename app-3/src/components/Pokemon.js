import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = props => {
    const [pokeInfo, setPokeInfo] = useState(null)
    const {name} = props.match.params

    useEffect(() => {
        console.log(props)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                setPokeInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [name])

    return (
        <div>
            <h1>{pokeInfo.name}</h1>
            <img src={pokeInfo.sprites.front_default} />
        </div>
    )
}

export default Pokemon