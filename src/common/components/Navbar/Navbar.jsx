import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Title from "../Title/Title";
import BGAnimals from "../../assets/images/puglogo.png";
import Sidebar from "../SideBar/SideBar";
import authService from "../../../Services/auth.service";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const logOut = () => {
  authService.logout();
};

export default function Example({ navigation, logged }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  return (
    <Disclosure as='nav' className='bg-transparent'>
      {({ open }) => (
        <>
          <div className=' mx-auto sm:px-6 space-x-4'>
            <div className='place-items-center relative flex justify-between h-fit'>
              <div
                className={classNames(
                  logged.function
                    ? "absolute inset-y-0 left-0 flex items-center"
                    : "absolute inset-y-0 left-0 flex items-center sm:hidden"
                )}>
                <Disclosure.Button
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                  className='object-center inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <Title />
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-end'>
                <div className='hidden sm:block sm:ml-6 rounded'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={logOut}
                        className={classNames(
                          item.current
                            ? "text-black"
                            : "text-gray-600 hover:text-white",
                          "px-3 py-2 rounded-md text-2xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition>
            <Disclosure.Panel className=''>
              <div className={classNames(logged.function ? "hidden" : "")}>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-black"
                          : "hover:text-white text-gray-400",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className={classNames(logged.function ? "" : "hidden")}>
                <div>
                  <Disclosure.Button className='flex text-3xl text-white items-center cursor-pointer fixed left-8 top-4 z-50'>
                    x
                  </Disclosure.Button>
                </div>
                <div
                  className={`top-0 left-0 w-screen sm:w-max bg-emerald-800 p-2 text-white fixed h-screen z-40`}>
                  <div className='h-fit px-12 py-20'>
                    <img
                      src={BGAnimals}
                      alt='bg animals'
                      className='w-3/4 rounded-full mx-auto'
                    />
                  </div>
                  <Sidebar/>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
