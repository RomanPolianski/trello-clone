import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { TaskPropsType } from '../../../types/types';
import { CardContent } from '@material-ui/core';
import s from './Task.module.css';
import { Draggable } from 'react-beautiful-dnd';

const Task: FC<TaskPropsType> = ({ text, id, index }) => {
  return (
    <Draggable draggableId={id} index={index} key={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={s.cardContainer} >
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
