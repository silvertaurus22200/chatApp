import Cookies from "js-cookie"
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatUser");

    const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined
    )

  return (
    <AuthContext.Provider value = {[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);