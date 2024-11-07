const Input = ({ children, className, ...props }) => (
    <button className={`bg-blue-500 text-white p-2 rounded ${className}`} {...props}>
        {children}
    </button>
);

export default Input;
