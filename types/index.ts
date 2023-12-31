import { MouseEventHandler } from 'react'
//specifies a structure
export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
}

export interface SearchManufactureProps {
    manufacture: string;
    setManufacture: (manufacture: string) => void;
}