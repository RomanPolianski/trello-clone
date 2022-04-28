import { FC, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { TaskPropsType } from '../../../types/types';
import { CardContent } from '@material-ui/core';
import s from './Task.module.css';
import { Draggable } from 'react-beautiful-dnd';
import EditIcon from '@material-ui/icons/Edit';
import EditTaskNameModal from './EditTaskNameModal/EditTaskModal';

const Task: FC<TaskPropsType> = ({ text, id, index, boardId }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(!open);

  return (
    <div>
      <Draggable draggableId={id} index={index} key={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card className={s.cardContainer}>
              <EditIcon className={s.editIcon} onClick={toggle} />
              <CardContent>
                <Typography gutterBottom>{text}</Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>

      <EditTaskNameModal
        open={open}
        close={toggle}
        boardId={boardId}
        taskId={id}
        taskName={text}
      />
    </div>
  );
};

export default Task;
