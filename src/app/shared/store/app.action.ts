import { createAction, props } from "@ngrx/store";
import { Appstate } from "./appstate";
 

/**
 * action to manage the success or failure from api
 */
export const setAPIStatus = createAction(
    '[API] success or failure status',
    props<{apiStatus: Appstate}>()
);