import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function ItemBtn({ children, title }: Props) {
    return (
        <div className="flex flex-col items-center">
            {children}
            <label className="text-[11px] font-bold text-[#c9c9c9]">{title}</label>
        </div>
    );
}
