import Container from "../container";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext/AuthContext";
import { logout } from "../../Context/authContext/AuthAction";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
var menu = [
  {
    id: 2,
    name: "Find laptop",
    path: "/findlaptop",
  },
  {
    id: 3,
    name: "Compare laptops",
    path: "/comparelaptop",
  },
  {
    id: 4,
    name: "Brands",
    path: "/brands",
  },
  {
    id: 5,
    name: "Articles",
    path: "/articles",
  },
];
const Header = ({ user }) => {
  const { dispatch } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(logout());
    setTimeout(() => navigate("/"), 500);
  };
  const navigate = useNavigate();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div className="py-5 bg-[#15b9d5]">
      <Container>
        <div className="flex justify-between items-center">
          <div
            className="text-4xl text-[#e26e2c] font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            LOGO{" "}
          </div>
          <div className="md:block hidden">
            <ul className="flex mx-8 text-lg font-semibold text-white items-center ">
              {menu.map((item) => (
                <li key={item.id} className="mx-6 cursor-pointer">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
              {user && user.UserRole ? (
                <li className="mx-6 cursor-pointer">
                  <Link to="/admin">Admin Page</Link>
                </li>
              ) : null}
              {user ? (
                <li className="mx-6 cursor-pointer">
                    <Menu as="div" className="relative inline-block text-left ">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-transparent text-lg font-medium text-white">
                          {user && user.Username}
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5 self-center"
                            aria-hidden="true"
                          />
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
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-[#15b9d5]"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-md font-semibold"
                                  )}
                                  onClick ={() => navigate('/accountdetails')}
                                >
                                  Account settings
                                </button>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-red-500"
                                        : "text-gray-700",
                                      "block w-full text-left px-4 py-2 text-sm"
                                    )}
                                  onClick = {handleLogout}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                </li>
              ) : (
                <li className="mx-6 cursor-pointer">
                  <Link to="/signin">Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
