# 투두리스트   
리액트 hook 강의를 듣고 복습을 하기 위해 투두리스트를 적을 수 있는 웹사이트를 만들었습니다.
## ✒️개발 인원 및 기간

- 1명
- 17일(기획 2일 / 디자인 2일 / 개발 13일)

## 🤖사용 기술
- React
- Zustand
- TypeScript
- styled-conponents
- react-datePicker

## 📝 주요 기능
### 1. 테마 변경(라이트 모드 / 다크 모드)
![Image](https://github.com/user-attachments/assets/c8029cb6-28ed-4a62-8dfd-fcf66fc424b2)
- 초기 설정은 라이트모드입니다.
- 토글 버튼을 만들어 테마를 자유롭게 변경할 수 있습니다.
```
store/mode.ts

export const useLightMode = create<theme>((set) => ({
    lightMode: true,
    setLightMode: () => set((state) => ({ lightMode: !state.lightMode})),
}));
```
- ***Zustand***로 상태를 관리합니다.
  - 초기에 lightMode를 true로 설정하고 ***토글 버튼을 클릭하면 setLightMode를 이용***하여 lightMode가 true 혹은 false로 변경됩니다. 테마에 따라 스타일이 바뀌는 컴포넌트들의 스타일 파일(styles 폴더에 위치)에 ***Props로 lightMode 값을 전달***하여 스타일이 바뀌게 했습니다.

### 2. 새 투두리스트 생성
![Image](https://github.com/user-attachments/assets/c0364d55-b45a-4465-a7af-64956bfaa2be)
- 모달창을 열어 투두리스트를 생성할 수 있습니다.
  - 옵션에서 새로 만들기 버튼을 클릭하여 모달창을 엽니다. Zustand로 모달창 상태를 관리합니다. ***open의 초기값을 false로 지정하고 새로 만들기 버튼을 클릭하면 setOpen을 통해 값이 true로 변경***됩니다. 모달창을 닫을 땐 모달창을 제외한 화면의 다른 부분을 클릭하면 setOpen을 통해 open의 값이 false로 변경됩니다.
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
- 완료 버튼으로 생성
    - 완료 버튼을 누르면 Zustand로 관리하고 있는 ***Todos에 새 데이터가 저장***됩니다. value는 아무것도 입력되지 않은 값으로 초기화됩니다. setOpen을 통해 open이 false가 되어 모달창이 닫힙니다. ***useNotification***을 이용해 게시물 생성 완료 알람이 뜹니다.
 
### 3. 투두리스트 삭제
![Image](https://github.com/user-attachments/assets/31505613-7ac5-4965-a92e-1540c31a8303)
- 삭제할 투두리스트를 선택한 뒤 삭제할 수 있습니다.
- Todo 리스트에 있는 데이터를 ***map()을 이용하여 하나씩 보여***줍니다. 
```
components/Main/TodoItemContainer.tsx

<TodoItemWrapper 
    lightMode={lightMode}
    isSelected={isSelected}
    onClick={() => choice && choiceItem(todo.id)}
    ref={ref}
    isHover={isHover}
>
    <TodoBoxWrapper>
        <TodoTitleWrapper>
            {todo.title}
        </TodoTitleWrapper>  
        <TodoDateWrapper>
            {todo.startDate?.toLocaleDateString()} - {todo.endDate?.toLocaleDateString()}
        </TodoDateWrapper>
    </TodoBoxWrapper>
    {choice && <ChoiceBtnWrapper lightMode={lightMode} isSelected={isSelected}/>} 
</TodoItemWrapper>
```
- Zustand를 이용하여 ***선택한 목록을 SelectedTodos로 관리***합니다. 한 목록을 클릭했을 때 그 리스트의 id가 selectedTodo에 있으면 isSelected는 false가 되고 selectedTodos에 없으면 isSelected는 true가 됩니다. styles/Main/todoItem.ts에 Props로 isSelected의 값을 전달하여 선택 당했을 때와 선택 당하지 않았을 때의 스타일을 지정합니다.
```
store/list.ts

deleteSelectedTodos: () => set((state) => ({
    todos: state.todos.filter(todo => !state.selectedTodos.includes(todo.id)),
    selectedTodos: []
})),
```
- 삭제 버튼을 눌렀을 때 ***useConfirm***을 이용하여 삭제할 건지 알람창을 통해 묻습니다.
  - 예를 클릭하면 deletedSelectedTodos를 통해 todos를 selectedTodos에 없는 id를 가진 데이터들로만 구성합니다. selectedTodos와 삭제가 완료되면 useNotification을 이용하여 게시물 삭제 완료 알람이 뜹니다. 선택 옵션을 벗어나 메인화면으로 돌아갑니다.
  - 알람창에서 아니요를 누르면 selectedTodos가 초기화되고 메인화면으로 돌아갑니다.

### 4. 검색
![Image](https://github.com/user-attachments/assets/72739cc5-30f7-47ee-90d3-20062ed77cd2)
- 투두리스트를 검색할 수 있습니다.
```
components/Header/Input.tsx

<InputWrapper 
    placeholder="SEARCH"
    value={value}
    onChange={onChange}
/>
```
- ***useInput***을 이용해 setValue로 value에 입력값이 저장했습니다. onChange로 실시간으로 변경되는 값을 볼 수 있게 했습니다.
```
store/list.ts
filteredTodos : [],
setFilteredTodos: (searchText) => {
    set((state) => ({
        filteredTodos: state.todos.filter((todo) => 
        todo.title.toLowerCase().includes(searchText.toLowerCase())
    ),
    }));
```
- ***filter***를 이용해 todos에 있는 데이터들을 하나씩 보며 ***todo.title 안에 filter가 포함되어 있으면 setFilterTodos로 filterTodos에 데이터를 넣***었습니다. useEffect로 value와 setFillterdTodos의 값이 바뀌면 todos를 조사했습니다.
    - ***filterTodos.length > 0을 충족하면 메인화면에 검색어가 포함된 투두리스트만*** 보여지게 했습니니다.


### 5. 정렬(생성 순/가장 최신 순/가장 오래된 순)
![Image](https://github.com/user-attachments/assets/b139fe76-fc1c-46cd-ae86-f6a2dd0e9d3f)
- 투두리스트를 생성 순/가장 최신 순/가장 오래된 순으로 정렬할 수 있습니다.   
  - 각 옵션을 createAsc(생성 순),  startDateAsc(가장 최신 순),  startDateDesc(가장 오래된 순)로 타입을 지정합니다.  setSortType을 이용해 선택한 옵션을 sortType에 정의합니다.
  ```
  store/list.ts
  
  sortType: "createAsc",
    setSortType: (sortType) => set({ sortType }),
    getSortedTodos: () => 
        set((state) => {
            let sortedTodos = [...state.todos];

            switch (state.sortType) {
                case "createAsc":
                    sortedTodos.sort((a, b) => a.id - b.id);
                    break;
                case "startDateAsc":
                    sortedTodos.sort((a, b) => (a.startDate?.getTime() || 0) - (b.startDate?.getTime() || 0));
                    break;
                case "startDateDesc":
                    sortedTodos.sort((a, b) => (b.startDate?.getTime() || 0) - (a.startDate?.getTime() || 0));
                    break;
                default:
                    break;
            }
            return { todos: sortedTodos};
        }),
    ```
  - ***Zustand의 set함수***와 ***switch문***을 활용하여 type이 변경될 때마다 todos에 있는 데이터들의 순서를 변경했습니다.
  - ***sort()*** 를 활용해 타입이 createAsc일 땐 id의 값을 비교하여 id가 작은 순서대로 옵니다. 타입이 startDateAsc일 땐 시작 날짜를 기준으로 작은 값에서 큰 값을 뺍니다. 결과가 음수이면 순서를 유지하고 양수이면 순서가 변경됩니다. 타입이 startDateDesc일 땐 시작 날짜를 기준으로 큰 값에서 작은 값을 뺍니다. 결과가 양수이면 순서를 유지하고 음수이면 결과가 바뀝니다.
    
### 6. 투두리스트 생성 중 창 닫을 시 경고
- 투두리스트를 만드는 모달이 열려있을 때 브라우저를 닫으려고 하 경고창을 띄웁니다.
```
const usePreventLeave = () => {
const listener = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
};

const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
};

const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
};

return {
    enablePrevent,
    disablePrevent
};
}

export default usePreventLeave;
```
- ***usePreventLeave***함수는 모달이 열렸을 때 ***beforeunload 이벤트***를 사용하여 정말 브라우저를 닫을 건지 한 번 더 물어봅니다.  
