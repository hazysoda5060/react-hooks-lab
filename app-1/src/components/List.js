const List = (props) => {
    return (
        <div>
            {props.todos.map(item => {
                return <h2>{item}</h2>
            })}
        </div>
    )
}

export default List