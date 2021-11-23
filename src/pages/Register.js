import React, { Component, Fragment, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import NavigationBar from '../components/Navbar'
import '../styles/Register.css'

function Register () {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [message, setMessage] = useState('')
    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/register', {
                first_name: firstname,
                last_name: lastname,
                email: email,
                username: username,
                password: password
            })
            history.push('/login')
        } catch(error) {
            if(error.response){
                setMessage(error.response.data.message)
            }
        }
    }

    return (
        <Fragment>
            <NavigationBar/>
            <div className="register-bg">
                <div className="container-sm">
                    <h2 className="row justify-content-center">REGISTER</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <form onSubmit={submit}>
                                <label className="col-form-label">First Name*</label>
                                <input type="text" className="form-control" required
                                    value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
                                <br/>
                                <label className="col-form-label">Last Name</label>
                                <input type="text" className="form-control"
                                    value={lastname} onChange={(e) => setLastName(e.target.value)}/>
                                <br/>
                                <label className="col-form-label">Email*</label>
                                <input type="email" className="form-control" required
                                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <br/>
                                <label className="col-form-label">Username*</label>
                                <input type="text" className="form-control" required
                                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                                <br/>
                                <label className="col-form-label">Password*</label>
                                <input type="password" className="form-control" required
                                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                                <br/>
                                <button className="btn register-btn">Sign Up</button>
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

export default Register;
