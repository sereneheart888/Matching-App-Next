import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center absolute left-[40px] top-[411px] w-[76%] h-[65px] gap-2">{children}</div>
    );
}
