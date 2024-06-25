"use client";

import { revalidateTag } from "next/cache";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const DisplayScreen = () => {
  const [state, setState] = useState([]);
  const [id, setID] = useState("");

  const getMyData = async () => {
    let data = await fetch("/api/post", { method: "GET", cache: "no-cache" });

    const res: any = await data.json();
    setState(res.data);
  };

  useEffect(() => {
    getMyData();
  }, []);

  const deleteMyData = async (formData: FormData) => {
    const getID = formData.get("postID");

    await fetch(`/api/post/${id}`, {
      method: "DELETE",
      next: { tags: ["post"] },
    });
  };

  return (
    <div className="flex gap-2 flex-wrap w-full">
      {state?.map((props: any) => (
        <div
          key={props._id}
          className="border rounded-md w-[250px] h-[350px] overflow-hidden"
        >
          <Image
            width={1000}
            height={1000}
            alt="image"
            src={props.image}
            className="w-full h-[90%] object-cover"
          />
          <div className="flex justify-between items-center">
            <p className="px-2 py-1 uppercase text-[12px]">{props.name}</p>
            <form action={deleteMyData}>
              <input type="hidden" name="postID" value={props._id} />
              <button
                type="submit"
                className="text-red-600"
                onClick={() => {
                  setID(props._id);
                }}
              >
                <MdDelete />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayScreen;
