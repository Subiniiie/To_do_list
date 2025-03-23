import { InputWrapper } from "../../styles/Header/input";
import useInput from "../../hooks/Header/useInput";
import { useList } from "../../store/list";
import { useEffect } from "react";

const Input = () => {
    const { value, onChange } = useInput('');
    const { setFilteredTodos } = useList();
    
    useEffect(() => (
        setFilteredTodos(value)
    ), [value, setFilteredTodos]);

    return (
        <InputWrapper 
            placeholder="SEARCH"
            value={value}
            onChange={onChange}
        />
    )
};

export default Input;