import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../../context/AuthProvider";
import axios from "axios";
import Cookies from "js-cookie"

function Logout() {

  const [authUser, setAuthUser] = useAuth();

  const onClickhandle = async ()=>{

    try {
      await axios.post("/api/user/logout")
      Cookies.remove("jwt")
      localStorage.removeItem("ChatUser");
      setAuthUser(null);
    } catch (error) {
       console.log(error);
       
    }

    }

  return (
    <div className="flex justify-end">
        <button className="py-1 mx-3" title="logout">
            <IoIosLogOut className="text-3xl" onClick={onClickhandle} />
        </button>
    </div>
  )
}

export default Logout