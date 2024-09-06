import { IoMdSend } from "react-icons/io";

function Typesend() {
  return (
    <div className="h-[8vh] flex items-center bg-slate-800"> 
        <div className="w-[70%] flex items-center space-x-3">
        <input type="text" placeholder="Type here" className="input w-full ms-4 focus:outline-none border-none h-10" />
        <IoMdSend className="text-4xl cursor-pointer hover:bg-slate-700 duration-300 rounded-full p-1 text-slate-900 " />
        </div>
    </div>
  )
}

export default Typesend