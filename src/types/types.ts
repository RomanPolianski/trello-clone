// ============= Ininial state types

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
  description: string;
}

// =================== props Types

export interface ListPropsType {
  boardId: string;
  title: string;
  taskList: Array<TaskListType>;
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

export interface EditTaskNameModalPropsType {
  boardId: string;
  taskId: string;
  taskName: string;
  open: boolean;
  close: Function;
  description: string;
}

// ============ action types

export interface addTaskActionType {
  boardId: string;
  inputText: string;
}

export interface editTaskActionType {
  boardId: string;
  taskId: string;
  description: string,
  taskName: string;
}

export interface deleteTaskActionType {
  boardId: string;
  taskId: string;
}

export interface dragHappenedActionType {
  droppableIdStart: number | string;
  droppableIdEnd: number | string;
  droppableIndexStart: number;
  droppableIndexEnd: number;
}



