import { ListPropsType } from '../../../types/types';
import { FC } from 'react';
import Task from '../Task/Task';
import s from './List.module.css';
import ActionButton from '../../common/ActionButton/ActionButton';

const List: FC<ListPropsType> = ({ title, taskList, boardId }) => {
  return (
    <div className={s.listContainer}>
      <h2>{title}</h2>
      {taskList.map((task) => (
        <Task text={task.text} key={task.id} />
      ))}
      <div>
        <ActionButton card="card" list="" boardId={boardId} />
      </div>
    </div>
  );
};

export default List;
