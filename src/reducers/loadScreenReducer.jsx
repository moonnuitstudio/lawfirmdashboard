import {
    SHOW_LOAD_SCREEN,
    HIDE_LOAD_SCREEN
} from '../types/loadScreenTypes'

const initialState = {
    isLoadscreenVisible: true
}

export default function(state = initialState, action) {
    const {type} = action

    switch (type) {
        case SHOW_LOAD_SCREEN:
            return {
                ...state,
                isLoadscreenVisible: true
            };

        case HIDE_LOAD_SCREEN:
            return {
                ...state,
                isLoadscreenVisible: false
            };
    
        default:
            return state;
    }
}