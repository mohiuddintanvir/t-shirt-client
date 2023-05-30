import React, { useContext } from 'react';
import "./signup.css"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const Signin = () => {
    const {createUser}=useContext(AuthContext)

    const { register, handleSubmit } = useForm();

    const handleSignIn=data=>{
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
        const user=result.user;
        console.log(user)

    })
    .catch(error=>console.error(error))
    }

    return (
        <div >
           <form className="wrapper " action="" onSubmit={handleSubmit(handleSignIn)}>
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 beside-image">
                            
                        </div>
                        <div className="col-md-6 right">
                            <div className="input-box">
                                <header>Sign Up</header>
                                <div className="input-field">
                                    <input type="email"  {...register("email")} className="input" placeholder="Email" id='email' autocomplete="off" required />
                                    
                                </div>
                                <div className="input-field">
                                    <input type="password"  {...register("password")} className="input" placeholder="Password" id='password' autocomplete="off" required />
                                    
                                </div>
                                <div className="input-field">
                                    <input type="confirm password"  {...register("confirmpassword")} className="input" placeholder="Confirm Password" id='password' autocomplete="off" required />
                                    
                                </div>
                                <div className="input-field">
                                    <input type="submit" className='submit' value="SingUp" />

                                </div>
                                <div className='login'>
                                    <span>Already have an account?<Link to='/login'>LogIn in here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </form>

        </div>
        
    );
};

export default Signin;