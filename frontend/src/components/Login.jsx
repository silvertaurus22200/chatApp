import axios from "axios"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import  Cookies from 'js-cookie'
import { useAuth } from "../context/AuthProvider"

function Login() {

    const [userAuth, setAuthUser] = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data)=>{
            const userinfo = {
                email : data.email,
                password : data.password
            }

            await axios.post("/api/user/login", userinfo)
            .then((response)=>{
                if(response.data){
                    alert("login successful");
                    localStorage.setItem("ChatUser", JSON.stringify(response.data))
                    setAuthUser(response.data)   
                    console.log("cookies:" , Cookies.get("jwt"))
                    
                }   
            }).catch((error)=>{
                if(error.response){
                    alert(JSON.stringify(error.response.data.error));
                }
            })
    }

  return (
    <div className="flex items-center justify-center h-[100vh]">
            <form className="rounded-xl border-2 border-black py-2 px-8 w-96" onSubmit={handleSubmit(onSubmit)} >
                <h1 className="text-center font-bold">Text <span className="text-green-500 font-bold">APP</span></h1>
                <h2 className="font-semibold ">Login</h2>
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
                    {...register("email" , {required: "This field is required"})} />
                </label>
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>) }
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
                    {...register("password" , {required: "This field is required"} )} />
                </label>
                {errors.password && (<p className="text-red-500">{errors.password.message}</p>)}
                <br />
                <div className="flex justify-between mt-3">
                    <p>Dont have an account?
                        <Link to= {"/signup"} className="text-blue-500 underline ms-1 font-semibold cursor-pointer">Sign Up</Link>
                    </p>
                    <input type="submit" value="Login" className="bg-green-500 text-white rounded-md py-1 px-2 font-medium cursor-pointer" />
                </div>
            </form>
        </div>
  )
}

export default Login