export interface ListPropsType {
  boardId: string;
  title: string;
  taskList: Array<TaskListType>;
}

export interface TaskListType {
  id: string;
  text: string;
  description: string;
}

export interface TaskPropsType {
  text: string;
  id: string;
  index: number;
  boardId: string;
  description: string;
}

export interface ActionButtonPropsType {
  list: string;
  card: string;
  boardId: string | null;
}

export interface BoardStateType {
  modalActive: boolean,
  boards: Array<BoardType>;
}

export interface BoardType {
  boardId: string;
  boardName: string;
  taskList: Array<TaskListType>;
}

export interface TaskListType {
  id: string;
  text: string;
}

export interface EditTaskNameModalPropsType {
    boardId: string;
    taskId: string;
    taskName: string;
    open: boolean;
    close: Function;
    description: string;
}
