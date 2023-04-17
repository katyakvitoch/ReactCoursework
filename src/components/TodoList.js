import React, {useState} from 'react'
import TodoForm from './TodoForm';



function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
    }

    const todosElements = todos.map((item) => (
        <li>{item.id}.{item.text}</li>
    ));

  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <ul>
            {todosElements}
        </ul>
    </div>
  )
}

export default TodoList








// export default class TodoListComponent extends React.Component{
//     constructor(props) {
//         super(props);
//         this.number = props.myNumber;
//     }
//     render () {
//         return <div>Hello world! {this.number}</div>
//     }
// }