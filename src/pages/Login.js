import React, { Component, Fragment } from 'react'
import axios from 'axios'
import NavigationBar from '../components/Navbar'
import '../styles/Login.css'

export default class Login extends Component {

    handleSubmit = e => {
        e.preventDefault()

        const data = {
            username: this.username,
            password: this.password
        }

        axios.post('http://localhost:3000/api/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render () {
        return (
            <Fragment>
                <NavigationBar/>
                <div className="login-bg">
                    <div className="container-sm">
                        <br/>
                        <h2 className="row justify-content-center">LOGIN</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <form onSubmit={this.handleSubmit}>
                                    <label className="col-form-label">Username</label>
                                    <input type="text" className="form-control" required
                                        onChange={e => this.username = e.target.value} />
                                    <br/>
                                    <label className="col-form-label">Password</label>
                                    <input type="password" className="form-control" required
                                        onChange={e => this.password = e.target.value} />
                                    <br/>
                                    <button className="btn login-btn">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
