import { useState, useRef, useEffect } from "react";

const useHover = () => {
    const [ isHover, setIsHover ] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement | null>(null);

    const handleMouseOver = () => setIsHover(true);
    const handleMouseOut = () => setIsHover(false);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener("mouseover", handleMouseOver);
            element.addEventListener("mouseout", handleMouseOut);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseover", handleMouseOver);
                element.removeEventListener("mouseout", handleMouseOut);
            }
        };
    }, []);

    return { ref, isHover};
}

export default useHover;