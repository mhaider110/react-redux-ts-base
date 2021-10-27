import { combineReducers } from "redux";

const reducers = combineReducers({
    appData: (state: any, action: any) => state 
})

export default reducers

export type AppDataState = ReturnType<typeof reducers>