"use client";
import { usePathname } from "next/navigation";
import React ,{FC,ReactNode} from "react";
import Header from "./static/Header";

interface iporp{
    children:ReactNode;
}
const MainLayout:FC<iporp> =async({children}) => {
    const pathname=usePathname();
    if(pathname === "/Register" || pathname ==="/Signin")
  return (
    <div>
      {children}
    </div>
  )
  else{
    return(
        <div>
            <Header/>
            <div>{children}</div>
        </div>
    )
  }
}

export default MainLayout
