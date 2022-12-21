import { 
    CLICK_MENU_HIDE,
    CLICK_MENU_SHOW
} from "../types/clickMenuTypes";

const initialState = {
    clickMenuAnchorPoint: { x: 0, y: 0 },
    showClicMenu: false
}

export default function(state = initialState, action) {
    const {type} = action

    switch (type) {
        case CLICK_MENU_HIDE:
            
            return {
                ...state,

            };
    
        default:
            return state;
    }
}