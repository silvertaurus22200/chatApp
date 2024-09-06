import useGetAllUsers from "../../../custom_hooks/useGetAllUsers"
import User from "./User"

function Users() {

    const [allUsers, isPending] = useGetAllUsers();

    return (
        <div>
            <h1 className="px-6 py-1 text-white font-semibold bg-slate-800 rounded-md">Messages</h1>
           <div className="overflow-y-auto" style={{height: "calc(82vh)"}}>
                {isPending && (<div><h1>we will be right back</h1></div>)}
                {!isPending && allUsers.map((user, index)=> (<User key = {index} user = {user} /> ))}
           </div>
            
        </div>
    )
}

export default Users