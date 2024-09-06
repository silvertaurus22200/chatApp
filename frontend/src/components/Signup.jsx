import {useForm} from "react-hook-form"
import axios from "axios"
import { Link } from "react-router-dom";

function Signup() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },

    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname : data.fullname,
            email : data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
        }

        await axios.post("/api/user/signup", userInfo)
        .then((response)=>{
            if(response.data){
                alert("signup successful")
            }
        }).catch((error)=> {
            if(error.response){
                alert(error.response.data.error)
            }
        })

    }

    return (
        <div className="flex items-center justify-center h-[100vh]">
            <form className="rounded-xl border-2 border-black py-2 px-8 w-96" onSubmit={handleSubmit(onSubmit)} >
                <h1 className="text-center font-bold">Text <span className="text-green-500 font-bold">APP</span></h1>
                <h2 className="font-semibold ">Sign up</h2>
                <br />
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" 
                    {...register("fullname" , {required: "This field is required."})} />
                </label>
                {errors.fullname && (<p className="text-red-500">{errors.fullname.message}</p> )}
                <br />
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" 
                    {...register("email" , {required: "This field is required."})} />
                </label>
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
                <br />
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" placeholder="password" 
                    {...register("password" , {required: "This field is required."})} />
                </label>
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
                <br />
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow" placeholder="confirm password" 
                    {...register("confirmPassword" , {required: "This field is required." , validate : ()=> watch("confirmPassword") === watch("password") ||  "Password does not match!" } )} />
                </label>
                {errors.confirmPassword && (<p className="text-red-500">{errors.confirmPassword.message}</p>)}
                <div className="flex justify-between mt-3">
                    <p>Have an account?
                        <Link to={"/login"} className="text-blue-500 underline ms-1 font-semibold cursor-pointer">Login</Link>
                    </p>
                    <input type="submit" value="signup" className="bg-green-500 text-white rounded-md py-1 px-2 font-medium cursor-pointer" />
                </div>
            </form>
        </div>
    )
}

export default Signup;