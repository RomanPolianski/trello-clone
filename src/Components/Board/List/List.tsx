import { ListPropsType } from '../../../types/types';
import { FC } from 'react';
import Task from '../Task/Task';
import s from './List.module.css';
import ActionButton from '../../common/ActionButton/ActionButton';
import { Droppable } from 'react-beautiful-dnd';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../Store/boardSlice';

const List: FC<ListPropsType> = ({ title, taskList, boardId }) => {
  const dispatch = useDispatch();

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(boardId));
  };

  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={s.listContainer}
        > <span onClick={handleDeleteBoard}>
          <HighlightOffIcon
            className={s.deleteIcon}
          />
        </span>
          
          <h2>{title}</h2>
          {taskList.map((task, index) => (
            <Task
              text={task.text}
              key={task.id}
              id={task.id}
              index={index}
              boardId={boardId}
              description={task.description}
            />
          ))}
          <ActionButton card="card" list="" boardId={boardId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
