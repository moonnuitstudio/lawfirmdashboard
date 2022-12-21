import {
    DOCKETWISE_REDIRECT_TO_AUTHORIZATION_URL,
    DOCKETWISE_SAVE_AUTHORIZATION_TOKENS
} from '../types/docketwiseTypes'

const initialState = {
    redirectURI: null,
    matters: {
        data: [],
        columnNames: []
    },
    user: null,
    step: null,
    isAuth: false,
}

export default function(state = initialState, action) {
    const {type} = action

    switch (type) {
        case DOCKETWISE_REDIRECT_TO_AUTHORIZATION_URL: // SAVE URI AUTH
            var {uri, step} = action.payload;

            return {
                ...state,
                redirectURI: uri,
                step,
                isAuth: false,
            };

        case DOCKETWISE_SAVE_AUTHORIZATION_TOKENS:
            var {step, user} = action.payload;

            return {
                ...state,
                redirectURI: null,
                user,
                isAuth: true,
                step
            };

        default:
            return state;
    }
}