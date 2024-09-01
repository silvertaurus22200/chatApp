import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <div>
            <form>
                <div className="flex justify-center space-x-3 my-2">
                    <label className="flex items-center gap-2 w-[80%]">
                        <input type="text" className="grow p-2 rounded-xl outline-none  " placeholder="Search" />
                    </label>
                    <button className="text-2xl hover:bg-slate-700 rounded-full p-2 duration-300">
                        <FaSearch />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Search