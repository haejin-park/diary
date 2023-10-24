import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = () => [
  {
    id: 1,
    author: "박해진",
    content: "일기1",
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "박해진",
    content: "일기2",
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "박해진",
    content: "일기3",
    emotion: 3,
    created_date: new Date().getTime()
  }
]
const App = () => {
  return (
      <div className="App">
        <DiaryEditor />
        <DiaryList diaryList={dummyList()} />
      </div>
  );
}

export default App;
