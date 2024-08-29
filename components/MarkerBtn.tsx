import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function MarkerBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full absolute text-white text-[15px] font-bold bottom-[10px] left-[7px] pl-[10px]">{children}{title}</button>
    );
}
