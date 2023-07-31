import React, { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';
const Login = () => {
    // const [user, setUser] = useState('');

    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const location = useLocation();
    const redirectPath = location.state?.path || '/';
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/api_breef6/register/login.php', data)

            .then((result) => {
                console.log(result.data);
                console.log(result.data.role)

                if (result.data.length === 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data.role === 'user') {

                    sessionStorage.setItem('username', result.data.name);
                    sessionStorage.setItem('useremail', result.data.email);
                    sessionStorage.setItem('user_id', result.data.id);

                    navigate('/User/UserProfile');
                } else {
                    sessionStorage.setItem('username', result.data.name);
                    sessionStorage.setItem('useremail', result.data.email);
                    sessionStorage.setItem('user_id', result.data.id);

                    navigate('/admin');

                }
            })




    }




    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }




        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };

    return (
        <>
            <Navbar />

            <div className="bodylog2">
                <div className='col-6  containerlog' style={{ height: "100%" }}>


                    <div className="tab-content" >
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <h1 className="h1log">LOGIN</h1>
                            <form className='mt-5' onSubmit={submitForm}>
                                <label htmlFor="floatingInput">Email address</label>
                                <div class="form-floating mb-3">
                                    <input id="email" type="email"
                                        className="form-control @error('email') is-invalid @enderror" name="email" required

                                        onChange={handleChange}
                                        value={data.email}
                                    />


                                </div>
                                <p className="errors">{formErrors.email}</p>

                                <label htmlFor="floatingPassword">Password</label>
                                <div class="form-floating mb-3 mt-3">

                                    <input id="password" type="password"
                                        className="form-control @error('password') is-invalid @enderror"
                                        name="password" required
                                        onChange={handleChange}
                                        value={data.password}
                                    />
                                </div>
                                <p className="errors">{formErrors.password}</p>


                                <div className='d-grid'>
                                    <button type="submit" className="btn-lg btn btn-primary btn-block mb-4 submitlog" >LOGIN</button>
                                </div>
                                <div className="text-center">
                                    <p>Not a member? <Link to="/register" className="loginhere-link">Register</Link></p>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default Login