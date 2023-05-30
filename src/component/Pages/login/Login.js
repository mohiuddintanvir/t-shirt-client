import React, { useContext, useState } from 'react';
import './login.css'
import img1 from "../../../img/cart/cart.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext)


    // login error set 
    const [loginError,setLogInError]=useState('');


    const { register, handleSubmit } = useForm();

    const handleLogIn = data => {
        console.log(data)
        setLogInError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

            })
            .catch(error => {
                console.log(error.message);
                setLogInError(error.message)
            })

    }





    return (
        <div >

            <form className="wrapper " action="" onSubmit={handleSubmit(handleLogIn)}>
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">
                            
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>LogIn</header>
                                <div className="input-field">
                                    <input type="email"  {...register("email")} className="input" placeholder="Email" id='email' autocomplete="off" required />
                                    
                                </div>
                                <div className="input-field">
                                    <input type="password"  {...register("password")} className="input" placeholder="Password" id='password' autocomplete="off" required />
                                    
                                </div>
                                <div>
                                    {
                                        loginError && <p>Email or password maybe wrong .please use correct information</p>
                                    }
                                </div>
                                <div className="input-field">
                                    <input type="submit" className='submit' value="login" />

                                </div>
                                <div className='login'>
                                    <span>Don't have account?<Link to='/signup'>SignIn in here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </form>




        </div>

    );
};

export default Login;
