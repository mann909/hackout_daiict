import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider ({children}){

    const [isLoggedIn,setIsLoggedIn]=useState(false)
    const [user,setUser]=useState({})



    const value ={
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
    }

    return (<AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>)
}