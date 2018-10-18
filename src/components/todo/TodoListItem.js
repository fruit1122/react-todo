import React, { Component } from 'react';
import './TodoListItem.css';
import user from '../../mock/user.json'

class Login extends Component{
    // props
    static defaultProps = {
        content : '',
        complete : false
    }

    constructor(props){
        super(props);
        this.state ={
            complete : props.complete,
            content : props.content
        }
    }

    // 변화가 없으면 rendering 안 하게 막기
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.complete !== nextProps.complete;
    }
    // life cycle 
    render(){
        const {id,content, complete, onRemove, onUpdate} = this.props
        return(
            <div className="todo-item" onClick={()=>onUpdate(id,!complete)}>
                <div className="todo-remove" data-name="remove" onClick={(e)=>{
                    e.stopPropagation();

                    onRemove(id);
                }}>x</div>
                <div className={`todo-content ${complete && 'todo-checked'}`}>{content}</div>
                { complete && (<div className="todo-complete">✓</div>)}
            </div>
        )
    }
}


export default Login