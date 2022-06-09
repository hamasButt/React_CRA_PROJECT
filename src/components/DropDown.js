/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DropDown() {
  const [dropElem, SetDropElem] = useState([]);
  const [val, setVal] = useState("");
  const [color, setClr] = useState("");

  useEffect(() => {
    SetDropElem([
      { value: "Can View", color: "text-stone-600", label: "Can View" },
      { value: "Can Edit", color: "text-emerald-600", label: "Can Edit" },
      { value: "Remove User", color: "text-rose-600", label: "Remove User" },
    ]);
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex justify-center items-center w-full px-3 py-1 ${color}`}
        >
          {!val ? "Can View" : val}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-50 fixed right-1/4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {dropElem.map((item, i) => {
              return (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <option
                      value={item.value}
                      onClick={(e) => {
                        setVal(e.target.value);
                        setClr(item.color);
                      }}
                      className={`block px-4 py-2 text-sm font-medium cursor-pointer ${item.color}`}
                      // className={classNames(
                      //   active ?item.color : "text-stone-800  ",
                      //   "block px-4 py-2 text-sm"
                      // )}
                    >
                      {item.label}
                    </option>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
