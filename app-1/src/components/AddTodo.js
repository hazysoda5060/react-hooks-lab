import {useState} from 'react'

const AddTodo = (props) => {
    const [input, setInput] = useState('')

    const addTodo = (e => {
        e.preventDefault()
        props.addTodo(input)
        setInput('')
    })

    return (
        <form onSubmit={addTodo}>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
}

export default AddTodo