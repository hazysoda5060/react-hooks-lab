import React, {useState} from 'react'
import List from './components/List'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (item => {
        // const newTodos = [...todos, item]
        setTodos([...todos, item])
    })

    return (
        <div className='App'>
            <AddTodo addTodo={addTodo}/>
            <List todos={todos}/>
        </div>
    )
}

export default App