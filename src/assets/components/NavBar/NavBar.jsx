import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {
    const [open, setOpen]= useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '*', name: 'NotFound', id: 5 },
      ];
      
      
    return (
        <nav>
            <div className=" md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                     <AiOutlineClose ></AiOutlineClose> 
                     : <AiOutlineMenuUnfold ></AiOutlineMenuUnfold>
                }
            </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;