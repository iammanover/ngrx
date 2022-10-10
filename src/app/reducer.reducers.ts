import { createReducer, on } from "@ngrx/store";
import { addData } from "./action.action";
import { model } from './model'

const initialState: model[] = [
    {
        Name: "laptop",
        Des: "best one",
        Offer: 330,
        Price: 10000,
    }
]

export const dataReducer = createReducer(initialState,
    on(addData, (state, formdata) => {
        return [...state, formdata];
    })

);
export function formReducer(initialstate: any, action: any) {
    return dataReducer(initialstate, action)
}
