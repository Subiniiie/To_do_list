import { InputWrapper } from "../styles/input";
import useInput from "../hooks/useInput";

const Input = () => {
    const { value, onChange } = useInput('');

    return (
        <InputWrapper 
            placeholder="SEARCH"
            value={value}
            onChange={onChange}
        />
    )
};

export default Input;