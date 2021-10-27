import { AppDataActionTypes } from "../action-types";
import { AppData } from "../data-types/app-data-types";

interface saveAppDataAction {
    type: AppDataActionTypes.SAVE_APP_DATA
    payload: AppData
}

export type AppDataAction = saveAppDataAction

