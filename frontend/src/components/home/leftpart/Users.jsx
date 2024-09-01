import User from "./User"

function Users() {
    return (
        <div>
            <h1 className="px-6 py-1 text-white font-semibold bg-slate-800 rounded-md">Messages</h1>
           <div className="overflow-y-auto" style={{height: "calc(82vh)"}}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
           </div>
            
        </div>
    )
}

export default Users