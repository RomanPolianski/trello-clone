import { addTaskActionType, BoardStateType, deleteTaskActionType, dragHappenedActionType, editTaskActionType, TaskListType } from './../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let boardId = 4;
let taskId = 8;

const initialState: BoardStateType = {
  boards: [
    {
      boardId: `board-${0}`,
      boardName: 'To Do',
      taskList: [
        {
          id: `task-${0}`,
          text: 'Study TS',
          description:
            'Knowledge of TypeScript is a key to success in modern world of technologies. So its a must',
        },
        {
          id: `task-${1}`,
          text: 'Study Sequelize',
          description:
            'Study sequelize using official documentation. Being able to run seeds, migrations, and of course create models',
        },
      ],
    },
    {
      boardId: `board-${1}`,
      boardName: 'In progress',
      taskList: [
        {
          id: `task-${2}`,
          text: 'Brush cat',
          description: 'Cat loves when owner brushes hair',
        },
        {
          id: `task-${3}`,
          text: 'Get some sleep',
          description:
            'Getting enought sleep is essential for any human. Make sure you sleep at least 7 hours a day.',
        },
        {
          id: `task-${4}`,
          text: 'Study react',
          description:
            'Who can even imagine web development without this technology!?',
        },
      ],
    },
    {
      boardId: `board-${2}`,
      boardName: 'Done',
      taskList: [
        {
          id: `task-${5}`,
          text: 'Walk the dog',
          description: 'Dogs love it',
        },
        {
          id: `task-${6}`,
          text: 'Get some more sleep',
          description: 'Why not?',
        },
        {
          id: `task-${7}`,
          text: 'Study CSS',
          description: 'A must have tool!',
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addList(state, { payload }: PayloadAction<string>) {
      const newList = {
        boardId: `board-${boardId}`,
        taskList: [],
        boardName: payload,
      };
      boardId += 1;
      state.boards.push(newList);
    },
    addTask(state, { payload }: PayloadAction<addTaskActionType>) {
      const newTask = {
        id: `task-${taskId}`,
        text: payload.inputText,
        description: '',
      };
      taskId += 1;

      const list = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskList.push(newTask);
    },
    editTask(state, { payload }: PayloadAction<editTaskActionType>) {
      const task = state.boards
        .find((board) => board.boardId === payload.boardId)
        ?.taskList.find((t) => t.id === payload.taskId);
      task!.text = payload.taskName;
      task!.description = payload.description;
    },
    deleteTask(state, { payload }: PayloadAction<deleteTaskActionType>) {
      const list = state.boards.find(
        (board) => board.boardId === payload.boardId
      );

      const index = list?.taskList?.findIndex(
        (task) => task.id === payload.taskId
      ) as number;
      if (index !== -1) {
        list?.taskList.splice(index, 1);
      }
    },
    deleteBoard(state, action) {
      const index = state.boards.find(
        (board) => board.boardId === action.payload.boardId
      ) as unknown as number;

      if (index !== -1) {
        state.boards?.splice(index, 1);
      }
    },
    dragHappened(state, { payload }: PayloadAction<dragHappenedActionType>) {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
      } = payload;

      if (droppableIdStart === droppableIdEnd) {
        const board = state.boards.find(
          (board) => droppableIdStart.toString() === board.boardId
        );
        const task = board?.taskList.splice(
          droppableIndexStart,
          1
        ) as Array<TaskListType>;
        board?.taskList.splice(droppableIndexEnd, 0, ...task);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const boardStart = state.boards.find(
          (board) => droppableIdStart.toString() === board.boardId
        );
        const task = boardStart?.taskList.splice(
          droppableIndexStart,
          1
        ) as Array<TaskListType>;
        const boardEnd = state.boards.find(
          (board) => droppableIdEnd.toString() === board.boardId
        );
        boardEnd?.taskList.splice(droppableIndexEnd, 0, ...task);
      }
    },
  },
});

export const { addList, addTask, dragHappened, editTask, deleteTask, deleteBoard } =
  boardSlice.actions;

export default boardSlice.reducer;
