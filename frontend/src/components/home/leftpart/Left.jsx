import Logout from "./Logout"
import Search from "./Search"
import Users from "./Users"

function Left() {
  return (
    <div className="w-[30%] bg-black h-[100vh]">
        <Search />
        <Users />
        <Logout />
    </div>
  )
}

export default Left