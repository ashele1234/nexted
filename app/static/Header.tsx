// "use client"
import Link from "next/link";
import React, { ReactNode } from "react";
import { MdCreate, MdHome, MdLock, MdPerson } from "react-icons/md";

interface iProps {
  icon: ReactNode;
  id: number;
  name: string;
  url: string;
}

const Header = () => {
  const nav: iProps[] = [
    {
      id: 1,
      name: "Home",
      url: "/",
      icon: <MdHome />,
    },
    {
      id: 2,
      name: "secret",
      url: "/secret",
      icon: <MdLock />,
    },
    {
      id: 3,
      name: "personal",
      url: "/Personal",
      icon: <MdPerson />,
    },
    {
      id: 4,
      name: "create",
      url: "/",
      icon: <MdCreate />,
    },
  ];
  const user = null;
  return (
    <div className="flex justify-center items-center w-full h-[70px] border-b">
      <div className="w-[90%] flex justify-between items-center">
        <h1>Logo</h1>

        <div className="flex gap-4 items-center">
          {nav.map((props: any) => (
            <Link
              href={props.url}
              className="border rounde-md flex gap-2 px-4 py-2 items-center"
            >
              <div>{props.icon}</div>
              <div>{props.name}</div>
            </Link>
          ))}
        </div>
        {user ? (
          <div className="border rounded-sm flex gap-2 px-6 py-2 items-center text-white">
          </div>) : (
          <Link
            href="/Signin"
            className="border rounded-sm flex gap-2 px-6 py-2 items-center"
          > <div>Log in</div></Link>
        )}
        
      </div>
    </div>
  );
};

export default Header;