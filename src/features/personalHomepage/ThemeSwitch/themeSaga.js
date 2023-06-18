import { call, select, takeEvery } from "redux-saga/effects";
import { saveThemeInLocalStorage } from "./themeLocalStorage";
import { selectIsDarkTheme } from "./themeSlice";

function* saveThemeInLocalStorageHandle() {
    const theme = yield select(selectIsDarkTheme);
    yield call(saveThemeInLocalStorage, theme);
};

export function* themeSaga() {
    yield takeEvery("*", saveThemeInLocalStorageHandle);
};