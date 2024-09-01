import Messages from "./Messages"
import Typesend from "./Typesend"
import UserChat from "./UserChat"

function Right() {
    return (
        <div className="w-[70%] bg-slate-900 h-[100vh]">
            <UserChat />
            <Messages />
            <Typesend />
        </div>
    )
}

export default Right