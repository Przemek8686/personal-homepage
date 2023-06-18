import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        repos: {},
        status: "initial",
    },
    reducers: {
        fetchPortfolioLoading: () => ({
            status: "loading",
        }),
        fetchPortfolioSuccess: (_, { payload: repos }) => ({
            status: "success",
            repos,
        }),
        fetchPortfolioError: () => ({
            status: "error",
        })
    },
});

export const {
    fetchPortfolioSuccess,
    fetchPortfolioLoading,
    fetchPortfolioError,
} = portfolioSlice.actions

export const selectPortfolioState = (state) => state.portfolio;
export const selectRepos = (state) => selectPortfolioState(state).repos;
export const selectStatus = (state) => selectPortfolioState(state).status;

export default portfolioSlice.reducer;