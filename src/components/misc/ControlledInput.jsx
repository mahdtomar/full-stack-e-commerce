import './scss/ControlledInput.css'

const ControlledInput = ({ label, value, onChange, id, placeholder }) => {
    return (
        <label htmlFor={id} >
            {label && <span>{label}</span>}
            <input
                className="controlled-input sm-text"    
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
