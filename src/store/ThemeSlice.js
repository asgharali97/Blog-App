import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeMode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    DarkTheme: (state) => {
      state.themeMode = 'dark';
    },
    LightTheme: (state) => {
      state.themeMode = 'light';
    },
    toggleTheme: (state) => {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { DarkTheme, LightTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
