import { useSelector, useDispatch } from "react-redux";

import { actionCheckDocketwiseStatus, actionSaveCodeAuth } from '../actions/docketwiseAction'

import {
    VNAME_DOCKETWISE_STATUS_ACTION,
    VTYPE_DOCKETWISE_WAIT_AUTH_RESPONSE,
    VTYPE_DOCKETWISE_REDIRECT_URI,
    VTYPE_DOCKETWISE_SAVED_AUTH_CODE
  } from "../values/docketwiseValues"

const useDocketwise = () => {
    const dispatch = useDispatch()
    
    const { redirectURI, isAuth } = useSelector(state => state.docketwise)

    const checkDocketwiseAuthorization = () => dispatch(actionCheckDocketwiseStatus())

    const redirectToDocketwiseAuthorizationURI = () => {
        const docketwise_status_action = localStorage.getItem(VNAME_DOCKETWISE_STATUS_ACTION);

        if (redirectURI && docketwise_status_action === VTYPE_DOCKETWISE_REDIRECT_URI) { // #If we have the redirect URI and the state is reditect we redirect
            localStorage.setItem(VNAME_DOCKETWISE_STATUS_ACTION, VTYPE_DOCKETWISE_WAIT_AUTH_RESPONSE)
            location.href = redirectURI;
        }
    }

    function saveAuthCode (_code) {
        if (_code) {
            localStorage.setItem(VNAME_DOCKETWISE_STATUS_ACTION, VTYPE_DOCKETWISE_SAVED_AUTH_CODE);
            dispatch(actionSaveCodeAuth(_code))
        }
    }

    return {
        redirectURI,
        hasARedirectionURI: !!redirectURI,
        isAuth,
        checkDocketwiseAuthorization,
        redirectToDocketwiseAuthorizationURI,
        saveAuthCode
    }
}

export default useDocketwise