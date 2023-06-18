import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/personalHomepage/ThemeSwitch/themeSlice";
import rootSaga from "./rootSaga";
import portfolioSlice from "../features/personalHomepage/Portfolio/portfolioSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeSlice,
        portfolio: portfolioSlice,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;