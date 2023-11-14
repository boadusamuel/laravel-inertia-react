import {Button} from "primereact/button";

export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            type={type}
            className={
                `bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
