export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block text-900 font-medium mb-2` + className}>
            {value ? value : children}
        </label>
    );
}
