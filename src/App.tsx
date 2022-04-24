import { useSelector } from 'react-redux';
import './App.css';
import List from './Components/Board/List/List';
import ActionButton from './Components/common/ActionButton/ActionButton';
import { RootState } from './Store/redux-store';

const App = () => {
  const lists = useSelector((state: RootState) => state.board.boards);
  return (
    <div className="listContainer">
      {lists.map((list) => (
        <List
          boardId={list.boardId}
          key={list.boardId}
          title={list.boardName}
          taskList={list.taskList}
        />
      ))}
      <div>
        <ActionButton list="list" card="" boardId={null} />
      </div>
    </div>
  );
};

export default App;
