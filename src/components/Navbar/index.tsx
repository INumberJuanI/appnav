"use client"
import { Home, User2, MessageCircle, Camera, Settings } from 'lucide-react';
import NavItem from './NavItem';
import { useState } from 'react';
import Indicator from './Indicator';

const Navbar = () => {
    const [activeElement, setActiveElement] = useState("Home");
    const changeActiveElement = (value: string) => setActiveElement(value);

    return (<>
        <nav className='w-full py-[8px] bg-[var(--clr-background)] fixed bottom-0'>
            <div className="navigation | relative w-full sm:w-max h-[70px] px-8 bg-[linear-gradient(45deg,#2196f3,#e91e63)] mx-auto flex justify-center items-center sm:rounded-[10px]">
                <ul className='flex'>
                    <NavItem text="Home" href="#" icon={<Home />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Profile" href="#" icon={<User2 />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Message" href="#" icon={<MessageCircle />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Photos" href="#" icon={<Camera />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Settings" href="#" icon={<Settings />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Potos" href="#" icon={<Camera />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Setings" href="#" icon={<Settings />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    
                    <Indicator count={7} />
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar