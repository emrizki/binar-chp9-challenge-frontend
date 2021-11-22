import React, { Component, Fragment } from 'react'
import axios from 'axios'
import NavigationBar from '../components/Navbar'
import '../styles/Register.css'

export default class Register extends Component {

    handleSubmit = e => {
        e.preventDefault()
        
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password
        }
        
        axios.post('http://localhost:3000/api/register', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <div className="register-bg">
                    <div className="container-sm">
                        <h2 className="row justify-content-center">REGISTER</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <form onSubmit={this.handleSubmit}>
                                    <label className="col-form-label">First Name*</label>
                                    <input type="text" className="form-control" required
                                        onChange={e => this.firstName = e.target.value} />
                                    <br/>
                                    <label className="col-form-label">Last Name</label>
                                    <input type="text" className="form-control"
                                        onChange={e => this.lastName = e.target.value} />
                                    <br/>
                                    <label className="col-form-label">Email*</label>
                                    <input type="email" className="form-control" required
                                        onChange={e => this.email = e.target.value} />
                                    <br/>
                                    <label className="col-form-label">Username*</label>
                                    <input type="text" className="form-control" required
                                        onChange={e => this.username = e.target.value} />
                                    <br/>
                                    <label className="col-form-label">Password*</label>
                                    <input type="password" className="form-control" required
                                        onChange={e => this.password = e.target.value} />
                                    <br/>
                                    <button className="btn register-btn">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
