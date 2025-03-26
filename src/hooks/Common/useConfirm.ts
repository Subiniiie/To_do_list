const useConfirm = (message = "", onConfirm: () => void, onCancle: () => void) => {
    if (typeof onConfirm !== "function" || typeof onCancle !== "function") {
        return
    };
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancle();
        }
    }

    return confirmAction;
};

export default useConfirm;