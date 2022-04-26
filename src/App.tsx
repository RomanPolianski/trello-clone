import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import List from './Components/Board/List/List';
import ActionButton from './Components/common/ActionButton/ActionButton';
import { RootState } from './Store/redux-store';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { dragHappened } from './Store/boardSlice';

const App = () => {
  const lists = useSelector((state: RootState) => state.board.boards);
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    dispatch(
      dragHappened({
        droppableIdStart: source.droppableId,
        droppableIdEnd: destination.droppableId,
        droppableIndexStart: source.index,
        droppableIndexEnd: destination.index,
      })
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default App;
