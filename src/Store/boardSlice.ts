import { createSlice } from '@reduxjs/toolkit';

let boardId = 3;
let taskId = 6;

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [
      {
        boardId: 1,
        boardName: 'Hi',
        taskList: [
          {
            id: 1,
            text: 'To be done',
          },
          {
            id: 2,
            text: 'Done',
          },
        ],
      },
      {
        boardId: 2,
        boardName: 'Done',
        taskList: [
          {
            id: 3,
            text: 'Brush cat',
          },
          {
            id: 4,
            text: 'Get some sleep',
          },
          {
            id: 5,
            text: 'Study sequelize',
          },
        ],
      },
    ],
  },
  reducers: {
    addList(state, action) {
      const newList = {
        boardId: boardId,
        taskList: [],
        boardName: action.payload,
      };
      boardId += 1;
      state.boards.push(newList);
    },
    addTask(state, action) {
      const newTask = {
        id: taskId,
        text: action.payload.inputText,
      };
      taskId += 1;

      const list = state.boards
        .find((board) => board.boardId === action.payload.boardId)
        ?.taskList.push(newTask);
    },
  },
});

export const { addList, addTask } = boardSlice.actions;

export default boardSlice.reducer;
