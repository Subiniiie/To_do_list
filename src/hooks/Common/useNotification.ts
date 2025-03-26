import { NotificationOptions } from "../../store/type";

const useNotification = (title: string, options: NotificationOptions): (() => void) => {
        if (!("Notification" in window)) {
            return () => {};
        }
        
        const fireNotif = (): void => {
            if (Notification.permission !== "granted") {
                Notification.requestPermission().then((permisson) => {
                    if (permisson === "granted") {
                        new Notification(title, options);
                    } else {
                        return;
                    }
                });
            } else {
                new Notification(title, options);
            }
        };

        return fireNotif;
}

export default useNotification;