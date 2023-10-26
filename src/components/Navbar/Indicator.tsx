
type Props = {
    count: number;
    width?: string;
}
const Indicator = ({ count, width }: Props) => {
    let styleString: string = '';

    for (let item = 0; item < count; item++) {
        styleString = styleString 
            + ".navigation ul li:nth-child(" 
            + (item+1) as string
            + ").active~.indicator { transform: translateX(calc("
            + (70*item) as string
            + "px)); } "
        ;
    }

    return (<>
        <style>
            {styleString}
        </style>
        <div className={`indicator | 
            absolute top-[-50%] w-[70px] h-[70px] bg-[linear-gradient(45deg,#2196f3,#e91e63)] rounded-full 
            border-[6px] border-solid border-[#06021b] flex justify-center items-center duration-[.5s] 

            before:content-[""] before:absolute before:top-[50%] before:left-[-22px] before:w-[20px] before:h-[20px] 
            before:bg-transparent before:rounded-tr-[20px] before:shadow-[1px_-8px_0_#06021b]

            after:content-[""] after:absolute after:top-[50%] after:right-[-22px] after:w-[20px] after:h-[20px] 
            after:bg-transparent after:rounded-tl-[20px] after:shadow-[-1px_-8px_0_#06021b]

            [.navigation ul li:nth-child(1).active~]:translate-x-[70px]
        `}></div>
    </>)
}

export default Indicator