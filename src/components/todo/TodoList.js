import React, { Component } from 'react';
import './TodoList.css';
import todo from '../../mock/todo.json'
import TodoListItem from './TodoListItem'

class TodoList extends Component{  
   
    state = {
        content : ''
    }
    constructor(props){
        super(props);
        
        if(props.user && todo[props.user.id]) {
            this.state.todoList =  todo[props.user.id].list
        }else this.state.todoList = []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        /*
        if (nextProps.value !== prevState.value) {
          return { value: nextProps.value };
        }
        return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        */
      }

    handleChange=(e)=>{
        this.setState({
            content : e.target.value
        })
    }
    
    handleKeypress=(e)=>(e.key === "Enter" && this.addItem())
      
      // item 삭제 
    removeItem = (key)=>{
        console.log("removeItem",key);
        const todoList = this.state.todoList;
        this.setState({
            todoList : todoList.filter(v=>{if(v.key !== key)return v;})
        })
    }

    addItem = (e)=>{
        console.log("addItem",this.state);
        //if(e.key)
        const todoList = this.state.todoList;
        var date = new Date();
        todoList.push({key:`key${date.getMilliseconds()+""+date.getSeconds()}`,content:this.state.content,complete : false})
        this.setState({
            todoList : todoList,
            content : ''
        })

    }

    udateItem = (key,complete)=>{
        console.log("udateItem",key,complete);
        const todoList = this.state.todoList;
        this.setState({
            todoList : todoList.map(v=>{if(v.key === key){ v.complete = complete } return v;})
        })
    }

    // life cycle 
    render(){
        const list = this.state.todoList.map((v,i)=>(<TodoListItem  key={v.key} id={v.key} content={v.content} complete={v.complete} onRemove={this.removeItem} 
            onUpdate={this.udateItem}></TodoListItem>))
        return(
            <div className="todo-list-form">
                <section>
                    <input type="text" placeholder="오늘의 할 일을 입력해주세요" value={this.state.content} onChange={this.handleChange} onKeyPress={this.handleKeypress}/>
                    <button onClick={this.addItem}>추가</button>
                </section>
                <section>{list}</section>
            </div>
        )
    }
}


export default TodoList