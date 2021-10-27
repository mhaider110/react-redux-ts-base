import { AppDataActionTypes } from '../action-types';
import { AppDataAction } from '../actions';
import { AppData } from '../data-types/app-data-types';

type AppState = AppData

const initialState = {
    userName: "",
    userEmail: ""
}

const reducer = (state: AppState = initialState, action: AppDataAction) => {
    switch (action.type) {
        case AppDataActionTypes.SAVE_APP_DATA:
            return {...state, ...action.payload }
        default:
            return state
    }

}

export default reducer;