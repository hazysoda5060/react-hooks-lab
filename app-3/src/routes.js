import {Switch, Route} from 'react-router-dom'
import PokeDex from './components/PokeDex'
import Pokemon from './components/Pokemon'

export default (
    <Switch>
        <Route exact path='/' component={PokeDex} />
        <Route path='/pokemon/:id' component={Pokemon} />
    </Switch>
)