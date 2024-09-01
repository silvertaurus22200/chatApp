function User() {
    return (
        <div className="flex space-x-3 px-4 py-2 hover:bg-slate-700 duration-300 cursor-pointer">
            <div className="avatar online w-12">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div>
                <h1 className="font-bold">Saurabh</h1>
                <span>saurabhkunwar22200@gmail.com</span>
            </div>
        </div>
    )
}

export default User