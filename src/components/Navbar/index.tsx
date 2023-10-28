"use client"
import { Home, Settings, GraduationCap, ScrollText } from 'lucide-react';
import NavItem from './NavItem';
import { useState } from 'react';
import Indicator from './Indicator';

const Navbar = () => {
    const [activeElement, setActiveElement] = useState("Home");
    const changeActiveElement = (value: string) => setActiveElement(value);

    return (<>
        <nav className='w-full pt-[8px] pb-[4rem] bg-[var(--clr-background)]'>
            <div className="navigation | relative w-full sm:w-max h-[70px] px-8 bg-[linear-gradient(45deg,#2196f3,#e91e63)] mx-auto flex justify-center items-center sm:rounded-[10px]">
                <ul className='flex'>
                    <NavItem text="Home" href="#" icon={<Home />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Cards" href="#" icon={<ScrollText />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Learn" href="#" icon={<GraduationCap />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    <NavItem text="Settings" href="#" icon={<Settings />} activeElement={activeElement} changeActiveElement={changeActiveElement} />
                    
                    <Indicator count={4} />
                </ul>
            </div>
        </nav>
    </>)
}

export default Navbar
