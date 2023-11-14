import {Button} from "primereact/button";

export default function DangerButton({ className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            className={
                `bg-red-600 border border-transparent rounded-md font-medium text-white capitalize tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
