import { useList } from "../store/list";

const useItem = () => {
    const { choice, setChoice } = useList();

    const handleChoice = () => {
        setChoice();
    }

    return {
        handleChoice
    }
}

export default useItem;