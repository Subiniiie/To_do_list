import { useState, useEffect, useRef } from "react";
import useNotification from "./useNotification";

const useScroll = () => {
    const [ scrollY, setScrollY ] = useState<number>(0);
    const ref = useRef<HTMLDivElement | null>(null);

    const triggerLastItemNotif = useNotification("마지막 게시물", {
        body: "마지막 게시물입니다."
    })

    const notifTriggered = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrollPosition = ref.current.scrollTop;
                setScrollY(scrollPosition);

            };
        };
        
        const container = ref.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        };

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (scrollY !== 0 && ref.current && Math.ceil(scrollY) === ref.current.scrollHeight - ref.current.clientHeight && !notifTriggered.current) {
            triggerLastItemNotif();
            notifTriggered.current = true;
        } else {
            notifTriggered.current = false;
        }
    }, [scrollY, triggerLastItemNotif])

    return {
        ref,
        scrollY,
    }
}

export default useScroll;