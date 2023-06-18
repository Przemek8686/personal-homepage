import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage } from "./themeLocalStorage";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkMode: getThemeFromLocalStorage(),
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectIsDarkTheme = state => selectModeState(state).isDarkMode;

export const selectModeState = state => state.theme;

export default themeSlice.reducer;