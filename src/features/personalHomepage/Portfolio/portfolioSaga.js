import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPortfolio } from "./getPortfolio";
import { fetchPortfolioLoading, fetchPortfolioSuccess, fetchPortfolioError } from "./portfolioSlice";

function* fetchPortfolioHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getPortfolio);
        yield put(fetchPortfolioSuccess(repositories));
    } catch {
        yield put(fetchPortfolioError());
    }
}

export function* portfolioSaga() {
    yield takeLatest(fetchPortfolioLoading.type, fetchPortfolioHandler);
};