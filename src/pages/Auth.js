import React, { Fragment, useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../styles/Login.css';
import '../styles/Register.css';

const baseUrl = `http://localhost:4000/api`;

const Auth = () => {
  const { isAuthenticated, loginSuccess, loginFailed } =
    useContext(AuthContext);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLogin = () => setLogin(!login);
  const userLogin = async () => {
    const user = {
      username,
      password,
    };

    try {
      const res = await axios.post(`${baseUrl}/login`, user);
      localStorage.setItem('token', res.data.data.accessToken);
      setUsername('');
      setPassword('');
      setIsLoading(false);
      loginSuccess();
    } catch (err) {
      setIsError(true);
      setError(err.response.data);
      setIsLoading(false);
      setUsername('');
      setPassword('');
      setTimeout(() => {
        setIsError(false);
        setError('');
        loginFailed();
      }, 2000);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/game" />;
  }

  return (
    <Fragment>
      <NavigationBar />
      <div className="login-bg">
        <div className="container-sm">
          <br />
          <h2 className="row justify-content-center">LOGIN</h2>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <label className="col-form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                required
              />
              <br />
              <label className="col-form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required
              />
              <br />
              <div>
                <div>
                  {isError && (
                    <div>
                      {error && (
                        <p
                          style={{
                            color: 'orange',
                            textShadow: '2px',
                            fontSize: '1.2rem',
                            margin: '0.4rem 0',
                            textAlign: 'center',
                          }}
                        >
                          {error.message}
                        </p>
                      )}
                      {error.status === 400 && (
                        <p style={{ color: 'read', margi: '0.4rem 0' }}>
                          {error.data.error}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <button className="btn login-btn" onClick={userLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;

// export default class Login extends Component {
//   handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       username: this.username,
//       password: this.password,
//     };

//     axios
//       .post('http://localhost:3000/api/login', data)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   render() {
//
//   }
// }
