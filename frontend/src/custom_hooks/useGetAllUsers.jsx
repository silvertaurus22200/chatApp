import axios from "axios";
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [isPending, setIsPending] = useState(false);


    useEffect(()=>{
        
        const getUsers = async ()=> {
            try {
                setIsPending(true);
                const token =  Cookies.get("jwt");
                const response = await axios.get("/api/user/users" ,
                    {
                        credentials: "include",
                        headers : {
                            Authorization : `Bearer ${token}`
                        }
                    }
                )
                setAllUsers(response.data);
            } catch (error) {
                console.log("error in useGetAllUsers: " , error)
            }
            finally{
                setIsPending(false);
            }

        }

        getUsers();

    }, 
    [])

    return [allUsers, isPending];

}

export default useGetAllUsers