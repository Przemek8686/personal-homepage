import { all } from "redux-saga/effects";
import { themeSaga } from "../features/personalHomepage/ThemeSwitch/themeSaga";
import { portfolioSaga } from "../features/personalHomepage/Portfolio/portfolioSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
        portfolioSaga(),
    ])
};