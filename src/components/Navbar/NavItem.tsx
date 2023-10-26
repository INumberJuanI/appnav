import Link from 'next/link'

type Props = {
    text: string;
    href: string;
    icon: React.ReactNode;
    activeElement: string;
    changeActiveElement: (value: string) => void;
}
const NavItem = ({ text, href, icon, activeElement, changeActiveElement }: Props) => {
    return (
        <li className={`list | relative w-[70px] h-[70px] list-none z-[1] ${activeElement === text? "active" : ""}`}            
            onClick={() => changeActiveElement(text)}
        >
            <Link href={href} className='relative flex justify-center items-center flex-col	w-full h-full text-center font-normal'>
                <span className={`icon | relative block leading-[75px] text-[1.5em] text-center duration-[.5s] delay-[.5s] transition-all
                    ${activeElement === text? "translate-y-[-32px]": ""}`}
                >
                    {icon}
                </span>
                <span className={`text | absolute font-normal text-[.75em] tracking-wider duration-[.5s] delay-[.5s]
                    ${activeElement === text? "opacity-1 translate-y-[10px]" : "opacity-0 translate-y-[20px]"}`}
                >
                    {text}
                </span>
                <span className={`circle | absolute block w-[50px] h-[50px] bg-transparent rounded-full border-[1px] border-solid border-white
                    ${activeElement === text? "duration-[.5s] delay-[.5s] translate-y-[-35px] scale-100" : "translate-y-[-37px] scale-0"}`}
                ></span>
            </Link>
        </li>
    )
}

export default NavItem