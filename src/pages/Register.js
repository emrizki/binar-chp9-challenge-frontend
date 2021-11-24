import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../components/Navbar';
import '../styles/Register.css';

const baseUrl = `http://localhost:4000/api`;

const Register = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userRegister = async () => {
    setIsLoading(true);
    const user = {
      first_name,
      last_name,
      email,
      username,
      password,
    };

    try {
      const res = await axios.post(`${baseUrl}/register`, user);
      console.log(res);
      setFirstName('');
      setLastName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      setIsError(true);
      setError(err.response);
      setIsLoading(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setUsername('');
      setPassword('');
      setTimeout(() => {
        setIsError(false);
        setError('');
      }, 2000);
    }
  };
  return (
    <Fragment>
      <NavigationBar />
      <div className="register-bg">
        <div className="container-sm">
          <h2 className="row justify-content-center">REGISTER</h2>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <label className="col-form-label">First Name*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setFirstName(e.target.value)}
                value={first_name}
              />
              <br />
              <label className="col-form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setLastName(e.target.value)}
                value={last_name}
              />
              <br />
              <label className="col-form-label">Email*</label>
              <input
                type="email"
                className="form-control"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <label className="col-form-label">Username*</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <br />
              <label className="col-form-label">Password*</label>
              <input
                type="password"
                className="form-control"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <br />
              <button className="btn register-btn" onClick={userRegister}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;

// export default class Register extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       first_name: this.firstName,
//       last_name: this.lastName,
//       email: this.email,
//       username: this.username,
//       password: this.password,
//     };

//     axios
//       .post('http://localhost:3000/api/register', data)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (

//   }
// }
