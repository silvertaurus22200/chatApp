function UserChat() {
    return (
        <div className="flex items-center justify-center space-x-3 bg-slate-700 duration-300 h-[8vh]">
            <div className="avatar online w-12">
                <div className="w-24 rounded-full ">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="text-white">
                <h1 className="text-xl">Saurabh</h1>
                <span className="text-sm">Offline</span>
            </div>
        </div>
    )
}

export default UserChat