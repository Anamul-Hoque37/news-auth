import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser}= useContext(AuthContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password);
        userLogin(email,password)
        .then(result=>{
            const user=result.user
            setUser(user)
        })
        .catch((error)=>{
            alert(error.code);
        })
    };
    return (
        <div>
            <div className="card bg-base-100 w-2/4 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login Your Account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Dont have an account. <Link className="text-red-600 font-bold" to="/auth/register">Register</Link> </p>
                </form>
            </div>

        </div>
    );
};

export default Login;