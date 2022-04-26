export interface ListPropsType {
  boardId: string;
  title: string;
  taskList: Array<TaskListType>;
}

export interface TaskListType {
  id: string;
  text: string;
}

export interface TaskPropsType {
  text: string;
  id: string;
  index: number;
}

export interface ActionButtonPropsType {
  list: string;
  card: string;
  boardId: string | null;
}

export interface BoardStateType {
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
