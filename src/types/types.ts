export interface ListPropsType {
  title: string;
  taskList: Array<TaskListType>;
}

export interface TaskListType {
  id: number;
  text: string;
}

export interface TaskPropsType {
  text: string;
}

export interface ActionButtonPropsType {
  list: string;
  card: string;
}
