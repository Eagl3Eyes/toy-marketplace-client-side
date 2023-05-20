import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";



const Login = () => {

    const { userLogin, googleLogin, githubLogin } = useContext(authContext)

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
        </div>
    );
};

export default Login;