import { createFeatureSelector, createSelector } from "@ngrx/store";
import { model } from './model'

const getFormDataState = createFeatureSelector<model>('data')

export const getFormData = createSelector(getFormDataState,(state)=>{
    return state
})