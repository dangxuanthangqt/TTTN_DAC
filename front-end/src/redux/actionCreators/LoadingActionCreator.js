import { SHOW_LOADING, HIDE_LOADING } from "../actionTypes/LoadingActionType"

export const showLoading =()=>{
    return {
        type: SHOW_LOADING
    }
}
export const hideLoading =()=>{
    return {
        type: HIDE_LOADING
    }
}