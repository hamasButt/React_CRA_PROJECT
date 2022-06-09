import React, { useState, useEffect } from "react";
import ReactAvatar from "react-avatar";
import { DropDown } from "../components/DropDown";
export function Users() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    setUser([
      {
        name: "Evelin(you) ",
        access: "Owner",
        color: "text-stone-400",
        bgcolor: "#232323",
      },
      { name: "Sophia Doe ", action: DropDown, bgcolor: "#FB7185" },
      { name: "Jacob Jones ", action: DropDown, bgcolor: "#34D399" },
      { name: "Albert Flores ", action: DropDown, bgcolor: "#FB7185" },
      { name: "Cody Fisher ", action: DropDown, bgcolor: "#C084FC" },
      { name: "Jane Cooper ", action: DropDown, bgcolor: "#22D3EE" },
    ]);
  }, []);

  return (
    <>
      <div className="p-4 ">
        {users.map((user, i) => {
          return (
            <div key={i} className="flex justify-between items-center mb-4">
              <div>
                <ReactAvatar
                  name={user.name.charAt(0)}
                  size="32px"
                  className="rounded-full"
                  color={user.bgcolor}
                />
                <span className="ml-2">{user.name}</span>
              </div>
              <div>
                <div className={user.color ? user.color : null}>
                  {!user.access ? <user.action /> : user.access}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span>Copy story link</span>
        </div>
        <div>
          Anyone with link:
          <DropDown />
        </div>
      </div>
    </>
  );
}
