import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import {useState, useRef} from "react";

const App = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, 
      content,
      emotion,
      created_date,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onDelete = (targetId) => {
    console.log(`${targetId}번쨰 일기가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
    console.log(newDiaryList);
  }
  return (
      <div className="App">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList onDelete={onDelete} diaryList={data} />
      </div>
  );
}

export default App;
