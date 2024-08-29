import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function RefreshBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full absolute text-[#5C5F5D] bg-[#FAFB64] text-[15px] font-bold top-[135px] left-[80px] pl-[10px] pr-[10px] pt-[5px] pb-[3px] drop-shadow-lg">{children}{title}</button>
    );
}
