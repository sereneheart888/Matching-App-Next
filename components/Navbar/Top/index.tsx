import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function TopNav({ children, title }: Props) {
    return (
        <div className="text-[#5C5F5D] pt-2 drop-shadow-md text-center text-[22pt] font-bold w-[76%] h-[50px] bg-white ml-[40px] absolute top-[70px] left-0">{title}
            {children}
        </div>
    );
}
