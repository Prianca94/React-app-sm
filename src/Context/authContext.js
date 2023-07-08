import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{

    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user"))|| null);

    const login=()=>{
        //
        setCurrentUser({id:1,
            name:"Pri",
            ProfilePic:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v546batch3-mynt-34-badgewatercolor_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=89288ef4b47127f7f34a5998b50e4470"});
    }
    
    useEffect(()=>{

        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser]);

    return(<AuthContext.Provider value={{currentUser,login}}>{children}</AuthContext.Provider>);

};
