import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NavigationBar from '../components/Navbar'
import '../styles/Login.css'

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = process.env.REACT_APP_API_BASE_URL;
            await axios.post(`${apiUrl}/login`, {
                username: username,
                password: password
            }).then(res => {
                localStorage.setItem('id', res.data.data.id)
                localStorage.setItem('username', res.data.data.username)
                localStorage.setItem('accessToken', res.data.data.accessToken)
            })
            history.push('/')
            
        } catch(error) {
            if(error.response){
                setMessage(error.response.data.message)
            }
        }
    }

    return (
        <Fragment>
            <NavigationBar/>
            <div className="login-bg">
                <div className="container-sm">
                    <br/>
                    <h2 className="row justify-content-center">LOGIN</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <form onSubmit={submit}>
                                <label className="col-form-label">Username</label>
                                <input type="text" className="form-control" required
                                    value={username} onChange={(e) => setUsername (e.target.value)}/>
                                <br/>
                                <label className="col-form-label">Password</label>
                                <input type="password" className="form-control" required
                                    value={password} onChange={(e) => setPassword (e.target.value)}/>
                                <br/>
                                <button className="btn login-btn">Login</button>
                                <br/>
                                <br/>
                                <h5 className="text-center">{message}</h5>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;
