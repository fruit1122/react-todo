import React, {Component} from 'react'
import TodoList from '../components/todo/TodoList'
import './Todo.css'

class TodoP extends Component{

    render(){
        return( <div className="todo-form">
            <header className="todo-header">TODO 리스트</header>
            <main>
                <TodoList user={this.props.location.state ? this.props.location.state : null}/>
            </main>
        </div>)
    }
}
   

export default TodoP