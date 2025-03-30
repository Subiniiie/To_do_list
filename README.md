# 투두리스트

리액트 hook 강의를 듣고 복습을 하기 위해 투두리스트를 적을 수 있는 웹사이트를 만들었습니다.

### ✒️개발 인원 및 기간
- 1명
- 17일(기획 2일 / 디자인 2일 / 개발 13일)

### 🤖사용 기술
- React
- Zustand
- TypeScript
- styled-conponents
- react-datePicker

### 📝 주요 기능
##### 1. 테마 변경(라이트 모드 / 다크 모드)
![Image](https://github.com/user-attachments/assets/c8029cb6-28ed-4a62-8dfd-fcf66fc424b2)
- 초기 설정은 라이트모드입니다.
- 토글 버튼을 만들어 테마를 자유롭게 변경할 수 있습니다.
```
export const useLightMode = create<theme>((set) => ({
    lightMode: true,
    setLightMode: () => set((state) => ({ lightMode: !state.lightMode})),
}));
```
- ***Zustand***로 상태를 관리합니다.
  - 초기에 lightMode를 true로 설정하고 ***토글 버튼을 클릭하면 setLightMode를 이용***하여 lightMode가 true 혹은 false로 변경됩니다. 테마에 따라 스타일이 바뀌는 컴포넌트들의 스타일 파일(styles 폴더에 위치)에 ***Props로 lightMode 값을 전달***하여 스타일이 바뀌게 했습니다.

##### 2. 새 투두리스트 생성
![Image](https://github.com/user-attachments/assets/c0364d55-b45a-4465-a7af-64956bfaa2be)
- 모달창을 열어 투두리스트를 생성할 수 있습니다.
  - 옵션에서 새로 만들기 버튼을 클릭하여 모달창을 엽니다. Zustand로 모달창 상태를 관리합니다. open의 초기값을 false로 지정하고 새로 만들기 버튼을 클릭하면 setOpen을 통해 값이 true로 변경됩니다. 모달창을 닫을 땐 모달창을 제외한 화면의 다른 부분을 클릭하면 setOpen을 통해 open의 값이 false로 변경됩니다.
```
hooks/Modal/usecreate.ts

const [ value, setValue ] = useState<string>('');

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
};
```
```
components/Modal/ContentContainer.tsx

<ContentInputWrapper 
    placeholder="내용" 
    value={value}
    onChange={onChange}
/>
```

- ***useState***를 이용하여 실시간으로 작성되는 ***내용을 value***에 저장했습니다. onChange로 setValue를 통해 입력되고 있는 값을 Input 컴포넌트에 보이게 했습니다.
- ***react-datepicker***를 이용하여 시작 날짜와 끝 날짜를 지정했습니다. 당일만 체크박스에 체크를 하면 끝 날짜가 시작 날짜와 같은 날로 자동으로 변경됩니다.
  - useState를 이용하여 시작 날짜와 끝 날짜를 각각 startDate, endDate에 저장했고 초기값은 오늘 날짜로 지정했습니다. 당일만 체크박스의 체크 유무를 checkedAllDay로 관리하여 초기값은 false로 지정했습니다. 체크를 하면 setCheckedAllDay를 통해 checkedAllDay의 값이 true로 변경됩니다. ***useEffect로 checkedAllDay의 값을 보고 있다가 true가 되면 끝 날짜가 자동으로 시작 날짜로 변경***됩니다.
```
hooks/Modal/useCreate.ts

const triggerNotif = useNotification("게시물 생성 완료", {
    body: "게시물 생성이 완료되었습니다."
});
```
```
hooks/Common/useNorification.ts
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
```
- 완료 버튼으로 생성
    - 완료 버튼을 누르면 Zustand로 관리하고 있는 ***Todos에 새 데이터가 저장***됩니다. value는 아무것도 입력되지 않은 값으로 초기화됩니다. setOpen을 통해 open이 false가 되어 모달창이 닫힙니다. ***useNotification***을 이용해 게시물 생성 완료 알람이 뜹니다.
