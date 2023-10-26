"use client"
import { Home, User2, MessageCircle, Camera, Settings } from 'lucide-react';
import NavItem from './NavItem';
import { useState } from 'react';
import Indicator from './Indicator';

const Navbar = () => {
    const [activeElement, setActiveElement] = useState("Home");
    const changeActiveElement = (value: string) => setActiveElement(value);

    return (<>
        <nav className="navigation | relative w-[400px] h-[70px] bg-[linear-gradient(45deg,#2196f3,#e91e63)] flex justify-center items-center rounded-[10px]">
            <ul className='flex w-[350px]'>
                <NavItem text="Home" href="#" icon={<Home />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                <NavItem text="Profile" href="#" icon={<User2 />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                <NavItem text="Message" href="#" icon={<MessageCircle />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                <NavItem text="Photos" href="#" icon={<Camera />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                <NavItem text="Settings" href="#" icon={<Settings />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                
                <Indicator />
            </ul>
        </nav>
    </>)
}

export default Navbar