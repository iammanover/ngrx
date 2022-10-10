import { createAction, props } from "@ngrx/store";
import { model } from "./model"

export const addData = createAction('[formdata] addData', props<model>())


