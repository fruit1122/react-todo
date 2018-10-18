import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './Login.css';
import user from '../mock/user.json'

class LoginP extends Component{

    constructor(props){
        super(props);
        this.inLogin = React.createRef();
        this.inPassword = React.createRef();
    }
    // props
    static defaultProps = {

    }

    // state 
    state = {
        id : '',
        pw : '',
        toTodo : false,
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.dataset.type] : e.target.value
        })
    }

    handleKeyBoard=(e)=>{
        if(e.key === 'Enter'){
            this.loginProcess();
        }
        
    }

    getUser = (id,pw)=>{
        if(user.user.find(v=>(v.id === id && v.password === pw ))) return true
        else return false
    }
    /**
     * handleClick
     * 로그인 버튼
     */
    loginProcess=()=>{
        let {id,pw} = this.state;
        if(!id){
            alert("id를 입력하세요");
            console.log(this.ref,this.isLogin)
            this.inLogin.current.focus();
            return;

        }

        if(!pw){
            alert("비밀번호를 입력하세요");
            this.inPassword.current.focus();
            return;
        }

        if(this.getUser(id,pw)) this.setState({toTodo : true})
        else alert("ID 또는 비밀번호가 틀렸습니다. 다시 입력하세요.")
    }
    // life cycle 
    render(){
        if(this.state.toTodo) return(<Redirect to={{pathname:"/todo" ,state:{id:this.state.id,pw:this.state.pw}}}></Redirect>)
        else return(
            <div className="login-form">
                <header className="login-header">로그인</header>
                <main className="login-main">
                    <section >
                        <span>로그인 : </span>
                        <input type="text" ref={this.inLogin} value={this.state.id} data-type="id" onChange={this.handleChange} onKeyPress={this.handleKeyBoard}/>
                    </section>
                    <section>
                        <span>비밀번호 : </span>
                        <input type="password" ref={this.inPassword} value={this.state.pw} data-type="pw" onChange={this.handleChange} onKeyPress={this.handleKeyBoard}/>
                    </section>
                    <button onClick={this.loginProcess}>로그인</button>
                </main>
            </div>
        )
    }
}

export default LoginP