import { Dispatch } from "redux";
import { AppDataActionTypes } from "../action-types";
import { AppDataAction } from "../actions";
import { AppData } from "../data-types/app-data-types";

export const saveAppData = (appData: AppData) => {
    return (dispatch : Dispatch<AppDataAction>) => {
        dispatch({
            type: AppDataActionTypes.SAVE_APP_DATA,
            payload: appData
        })
    }
}