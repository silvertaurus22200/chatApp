import Home from "./components/home/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import {Routes,Route, Navigate} from "react-router-dom"
import { useAuth } from "./context/AuthProvider"

function App() {


    const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <Routes>
        <Route path = "/" element = { authUser ? (<Home />) : (<Navigate to="/login" /> ) } />
        <Route path = "/login" element = {authUser ? (<Navigate to="/" />) : (<Login />)} />
        <Route path = "/signup" element =  {<Signup />} />

      </Routes>
    </>
  )
}

export default App
