import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Page = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4">
        <div>This is register screen</div>
        <div className="my-10">
          <hr />
        </div>
        <form>
          <div className="flex fles-col mb-4 items-center gap-2">
            <label className="font-semibold text-[12px] ">Display Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border outline-none h-[45px] rounded-md pl-2  text-black"
            />
          </div>
          <div className="flex fles-col mb-4 items-center gap-7">
            <label className="font-semibold text-[12px]">Input Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border outline-none h-[45px] rounded-md pl-2 text-black"
            />
          </div>
          <div className="flex fles-col mb-4 items-center gap-2">
            <label className="font-semibold text-[12px]"> Input Password:</label>
            <input
              type="Password"
              name="email"
              placeholder="Password"
              className="border outline-none h-[45px] rounded-md pl-2  text-black"
            />
          </div>

          <button className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md">
            Register
          </button>
        </form>
        <div className="text-[12px] my-4 text-center">
          Already have an account{" "}
          <Link href="/Signin" className="italic font-semibold">
            Sign in here
          </Link>
        </div> 
        <div className="my-3">
          <hr />
        </div>
        <div>
          <p className="text-[12px] font-bold">
            Register through your social Account 
          </p>
          <div className="flex item-center gap-2">
            <button className="w-full mt-2 h-[55px] flex justify-center items-center text-white bg-red-500 hover:bg-red-500 duration-300 rounded-md text-[35px]">
              <FaGoogle/>
            </button>
            <button className="w-full mt-2 h-[55px] flex justify-center items-center text-white bg-neutral-900 hover:bg-neutral-900 duration-300 rounded-md text-[35px]">
              <FaGithub/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;