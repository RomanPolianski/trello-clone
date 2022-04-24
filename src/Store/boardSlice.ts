import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {},
});

export const {} = boardSlice.actions;

export default boardSlice.reducer;
