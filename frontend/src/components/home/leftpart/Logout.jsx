import { IoIosLogOut } from "react-icons/io";
function Logout() {
  return (
    <div className="flex justify-end">
        <button className="py-1 mx-3" title="logout">
            <IoIosLogOut className="text-3xl" />
        </button>
    </div>
  )
}

export default Logout