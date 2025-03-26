import { NotificationOptions } from "../../store/type";

const useNotification = (title: string, options: NotificationOptions): (() => void) => {
    console.log('알람 확인')
        if (!("Notification" in window)) {
            console.log('안됐음')
            return () => {};
        }
        
        const fireNotif = (): void => {
            console.log('제대로 확인')
            if (Notification.permission !== "granted") {
                console.log('승인문제?')
                Notification.requestPermission().then((permisson) => {
                    if (permisson === "granted") {
                        new Notification(title, options);
                        console.log('승인완료')
                    } else {
                        console.log('승인안됐음')
                        return;
                    }
                });
            } else {
                console.log('승인되고 새로운 알람 생성')
                new Notification(title, options);
            }
        };

        return fireNotif;
}

export default useNotification;