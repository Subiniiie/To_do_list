import React, { useState } from "react";

const useInput = (initialValue = '') => {
    const [ value, setValue ] = useState<string>(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return {
        value,
        setValue,
        onChange,
    }
};

export default useInput;