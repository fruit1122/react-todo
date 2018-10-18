import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import LoginP from '../pages/LoginP'
import TodoP from '../pages/TodoP'

export default  class App extends Component{
    /*
           /* <Route exact path="/mock/user/:id/:pw" render={({match})=>{
                if(user.user.find(v=>(v.id === match.params.id && v.password === match.params.pw ))) return "{success:true}"
                else return "{success:false}"
            }} >
             </Route>
            <Route exact path="/mock/todo" render={()=>(JSON.stringify(todo))} > </Route>
    */
    render(){
        return(<div>
            <Route exact path="/" component={LoginP} > </Route>
            <Route  path="/todo" component={TodoP} > </Route>
        </div>)
    }
}
