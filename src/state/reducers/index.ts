import { combineReducers } from "redux";
import appReducer from './app-reducer'

const reducers = combineReducers({
    appData: appReducer
})

export default reducers

export type AppDataState = ReturnType<typeof reducers>