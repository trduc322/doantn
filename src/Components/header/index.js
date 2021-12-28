import Container from "../container"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
var menu = [
    {
        id: 1,
        name: "Categories",
        path: "/categories"
    },
    {
        id: 2,
        name: "Find laptop",
        path: "/findlaptop"

    },
    {
        id: 3,
        name: "Compare laptops",
        path: "/compare"
    },
    {
        id: 4,
        name: "Brands",
        path: "/brands"
    },
    {
        id: 5,
        name: "Articles",
        path: "/articles"
    },
    {
        id: 6,
        name: "Sign in",
        path: "/signin"
    }
];
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    useEffect(()=> {
        const hideMenu = () => {
            if(window.innerWidth > 996 && isOpen){
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })
    return (
        <div className="my-5">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="text-4xl text-[#e26e2c] font-bold cursor-pointer"> LOGO </div>
                    <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="white"
                        >
                            <path
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                stroke-width="2" 
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className="md:block hidden">
                        <ul className="flex mx-8 text-lg font-semibold text-white items-center ">
                            {menu.map(item => <li key={item.id} className="mx-6 cursor-pointer"><Link to={item.path}>{item.name}</Link></li>)}
                        </ul>
                    </div>
                </div>
                
            </Container>
            <div className={isOpen? "grid grid-rows-6 text-center items-center bg-[#e26e2c]":"hidden"}>
                {menu.map(item => <div key={item.id} className="mx-6 cursor-pointer text-white py-2 font-semibold"><Link to={item.path}>{item.name}</Link></div>)}     
            </div>
        </div>
    )
}



export default Header
