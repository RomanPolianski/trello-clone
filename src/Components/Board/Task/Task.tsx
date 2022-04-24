import { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { TaskPropsType } from '../../../types/types';
import { CardContent } from '@material-ui/core';
import s from './Task.module.css';

const Task: FC<TaskPropsType> = ({ text }) => {
  return (
    <Card className={s.cardContainer}>
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
