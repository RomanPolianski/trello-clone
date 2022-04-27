import { BoardStateType, TaskListType } from './../types/types';
import { createSlice } from '@reduxjs/toolkit';

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
        },
        {
          id: `task-${1}`,
          text: 'Study Sequelize',
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
        },
        {
          id: `task-${3}`,
          text: 'Get some sleep',
        },
        {
          id: `task-${4}`,
          text: 'Study react',
        },
      ],
    },
    {
        boardId: `board-${2}`,
        boardName: 'Done',
        taskList: [
          {
            id: `task-${5}`,
            text: 'Brush cat',
          },
          {
            id: `task-${6}`,
            text: 'Get some sleep',
          },
          {
            id: `task-${7}`,
            text: 'Study CSS',
          },
        ],
      },
  ],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addInitialVal(state, action) {
      state.boards.push(action.payload);
    },
    addList(state, action) {
      const newList = {
        boardId: `board-${boardId}`,
        taskList: [],
        boardName: action.payload,
      };
      boardId += 1;
      state.boards.push(newList);
    },
    addTask(state, action) {
      const newTask = {
        id: `task-${taskId}`,
        text: action.payload.inputText,
      };
      taskId += 1;

      const list = state.boards
        .find((board) => board.boardId === action.payload.boardId)
        ?.taskList.push(newTask);
    },
    dragHappened(state, action) {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
      } = action.payload;

      if (droppableIdStart === droppableIdEnd) {
        const board = state.boards.find(
          (board) => droppableIdStart === board.boardId
        );
        const task = board?.taskList.splice(
          droppableIndexStart,
          1
        ) as Array<TaskListType>;
        board?.taskList.splice(droppableIndexEnd, 0, ...task);
      }

      if (droppableIdStart !== droppableIdEnd) {
        const boardStart = state.boards.find(
          (board) => droppableIdStart === board.boardId
        );
        const task = boardStart?.taskList.splice(
          droppableIndexStart,
          1
        ) as Array<TaskListType>;
        const boardEnd = state.boards.find(
          (board) => droppableIdEnd === board.boardId
        );
        boardEnd?.taskList.splice(droppableIndexEnd, 0, ...task);
      }
    },
  },
});

export const { addList, addTask, dragHappened } = boardSlice.actions;

export default boardSlice.reducer;
