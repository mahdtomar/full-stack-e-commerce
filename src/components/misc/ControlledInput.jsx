const ControlledInput = ({ label, value, onChange, id, placeholder }) => {
    return (
        <label htmlFor={id}>
            {label && <span>{label}</span>}
            <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                placeholder={placeholder || ''}
            />
        </label>
    );
};

export default ControlledInput;
