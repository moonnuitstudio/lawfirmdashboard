import {
    SHOW_LOAD_SCREEN,
    HIDE_LOAD_SCREEN
} from "../types/loadScreenTypes"

export const setShowLoadScreen = () => {
    return async (dispatch) => dispatch({type: SHOW_LOAD_SCREEN})
}

export const setHideLoadScreen = () => {
    return async (dispatch) => dispatch({type: HIDE_LOAD_SCREEN})
}

export const dispatcHideLoadscreen = (dispatch) => dispatch({type: HIDE_LOAD_SCREEN})