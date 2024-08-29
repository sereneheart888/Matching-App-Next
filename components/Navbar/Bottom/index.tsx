import { PropsWithChildren } from "react";

export default function BottomNav({ children }: PropsWithChildren) {
    return (
        <div className="flex absolute bottom-[83px] left-[40px] bg-[#A5A5A5] w-[76%] h-[55px] rounded-t-lg justify-between gap-5 pt-2 pl-4 pr-4">
            {children}
        </div>
    );
}
