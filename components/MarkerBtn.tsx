import React, { PropsWithChildren, MouseEvent } from 'react';

type Props = PropsWithChildren<{
    title?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}>;

export default function MarkerBtn({ children, title, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="flex rounded-full hover:text-black absolute text-white text-[15px] font-bold bottom-[10px] left-[7px] pl-[10px]"
        >
            {children}{title}
        </button>
    );
}
