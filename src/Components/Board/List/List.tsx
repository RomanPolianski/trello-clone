import { ListPropsType } from '../../../types/types';
import { FC } from 'react';
import Task from '../Task/Task';
import s from './List.module.css';
import ActionButton from '../../common/ActionButton/ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const List: FC<ListPropsType> = ({ title, taskList, boardId }) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={s.listContainer}
        >
          <h2>{title}</h2>
          {taskList.map((task, index) => (
            <Task text={task.text} key={task.id} id={task.id} index={index} boardId={boardId}/>
          ))}
          <ActionButton card="card" list="" boardId={boardId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;
