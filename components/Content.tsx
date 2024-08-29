import { PropsWithChildren } from "react";
export default function HomeContent({ children }: PropsWithChildren) {
    return (
        <div className="absolute left-[40px] top-[180px] w-[76%] h-[230px]">{children}</div>
    );
}
