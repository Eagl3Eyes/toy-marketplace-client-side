import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import TitleHooks from "../Hooks/TitleHooks";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    TitleHooks('Login')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const { userLogin, googleLogin, githubLogin } = useContext(authContext)


    const notify = (message) => toast.error(message);

    const login = (event) => {
        event.preventDefault();

        userLogin(event.target.email.value, event.target.password.value).then(() => {
            window.location.replace(from);

        }).catch((error) => {
            if (error.message == 'Firebase: Error (auth/wrong-password).') {
                notify('wrong-password.')
            }
            if (error.message == 'Firebase: Error (auth/user-not-found).') {
                notify('user not found.')
            }

            console.log(error)
        })
    }

    const singIn = () => {
        googleLogin().then(() => {
            window.location.replace(from);
        })
    }
    const github = () => {
        githubLogin().then(() => {
            window.location.replace(from);
        })
    }

    return (
        <div>
            <ToastContainer position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

            <div className="hero min-h-screen">
                <div className="hero-content flex lg:flex justify-center">
                    <div>

                        <img src="/login.svg" className="w-[600px] max-[850px]:hidden" />


                    </div>

                    <div>

                        <h1 className="text-5xl font-bold text-center text-[#808bfe] mb-6">Sign In</h1>


                        <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={login}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" id="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" id="password" placeholder="password" className="input input-bordered" required />
                                    <div className="flex gap-3">
                                        <label className=" mt-3 cursor-pointer" onClick={() => { singIn() }}><FcGoogle size={35} /></label>
                                        <label className=" mt-3 cursor-pointer" onClick={() => { github() }}><IoLogoGithub size={35} /></label>
                                    </div>




                                </div>
                                <label className="label">
                                    <Link to="/register" className="label-text-alt link">Dont have an account ?</Link>
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary btn-ghost text-white bg-[#808bfe] hover:bg-[#666fcb] border-none">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;