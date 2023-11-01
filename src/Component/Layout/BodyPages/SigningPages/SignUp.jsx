import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Swal from "sweetalert2";

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const [userCreate, setUserCreate] = useState('');
    const [registerError, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const accepted = form.get('terms');
        console.log(name, email, password, accepted);


        if (password.length < 6) {
            setError('Password must contain six characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('Your password must contain one Capital letter');
            return;
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setError('Your password must contain one special character');
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email is not valid");
            return;
        } else if (!accepted) {
            setError('Please accept our all the terms and conditions first');
            return;
        }
        createUser(email, password)
            .then(result => {
                e.target.reset();
                setUserCreate("user created");
               
                console.log(result.user);
                
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
        navigate('/');

    }
    return (
        <div className="mb-8">
            <div className="  flex flex-col justify-center items-center  relative ">
                <div className="py-10 flex flex-col justify-start items-center   bg-gray-900/70 w-full z-10 overflow-hidden h-full ">

                    <div className="md:my-10 w-[90%] md:w-[70%] lg:w-[50%] h-[90%] top-0 z-40">
                        <h2 className="text-center text-white md:text-4xl mb-8 font-bold">Please Sign Up First!!!</h2>
                        <form onSubmit={handleSubmit}
                            className="flex flex-col justify-center items-center border-2 border-zinc-400 px-3 py-9 md:px-24 md:pt-14 bg-gray-300/40 rounded-xl shadow-xl ">
                            {
                                registerError && <p className="text-red-700 text-md font-bold mt-2">{ registerError}</p>
                            }
                            {
                                userCreate && <p className="text-green-700 text-md font-bold mt-2">
                                    {Swal.fire('Sign up Successfull !!!')}

                                </p>
                            }

                            <input
                                required
                                type="text"
                                name='name'
                                placeholder="Name"
                                className=" border-2 border-gray-600 py-2 px-2 
                        md:px-8 rounded-lg "
                            /><br />

                            <input
                                required
                                type="email"
                                name='email'
                                placeholder="Email"
                                className=" border-2 border-gray-600 py-2 
                             px-2 
                        md:px-8  rounded-lg "
                            /><br />

                            <div className="flex relative items-center">
                                <input
                                    required
                                    type={showPass ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    className="border-2 border-gray-600 py-2 px-2 md:px-8 rounded-lg "

                                />
                                <br />
                                <span className="absolute right-[5%]" onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <AiFillEyeInvisible /> : <AiFillEye />
                                    }

                                </span>

                            </div>
                            <div className="my-2">
                                <input
                                    required
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    className="mr-2"
                                />

                                <label className="text-black text-sm font-bold "
                                    htmlFor="terms">
                                    Check our <a href="http://" target="_blank" rel="noopener noreferrer">terms and conditions</a>

                                </label>
                            </div>
                            <button className="text-white font-bold text-lg btn btn-success mb-3">
                                <input
                                    required
                                    type="submit"
                                    value='Sign Up'
                                    className=" py-2 px-6 rounded-lg "
                                />
                            </button>
                            <br />
                            <p className="text-white mx-2 text-center  font-bold ">
                                Already have an account? <br /> Go to the <br /> <Link className="underline font-bold text-black" to="/login"> Login Page
                                </Link>
                            </p>


                        </form>
                    </div>
                </div>

                <img src="https://i.imgur.com/5D8uE9Z.jpg" alt="" className=" w-full h-full absolute object-cover mx-auto overflow-hidden shadow-xl" />
            </div>
        </div>
    );
};

export default SignUp;