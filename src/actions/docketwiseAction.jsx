import {
    DOCKETWISE_REDIRECT_TO_AUTHORIZATION_URL,
    DOCKETWISE_SAVE_AUTHORIZATION_TOKENS
} from "../types/docketwiseTypes";

import {
    VNAME_DOCKETWISE_STATUS_ACTION,
    VNAME_DOCKETWISE_USER_TOKEN,
    VTYPE_DOCKETWISE_REDIRECT_URI,
    VTYPE_DOCKETWISE_WAIT_AUTH_RESPONSE,
    VTYPE_DOCKETWISE_SAVED_AUTH_TOKENS
} from "../values/docketwiseValues"

const DOCKETWISE_CLIENT_ID = import.meta.env.VITE_DOCKETWISE_CLIENT_ID;
const DOCKETWISE_REDIRECT_URI = import.meta.env.VITE_DOCKETWISE_REDIRECT_URI;
const DOCKETWISE_SCOPE = import.meta.env.VITE_DOCKETWISE_SCOPE;
const DOCKETWISE_RESPONSE_TYPE_CODE = import.meta.env.VITE_DOCKETWISE_RESPONSE_TYPE_CODE;

import qs from 'query-string';
import { generateAxiosConfig } from "../helpers/connection";

import axios from "axios";
import docketwiseAxios, { docketwiseGenerateConfig } from "../config/docketwiseAxios";
import axiosClient from "../config/axiosClient";

import { dispatcHideLoadscreen } from "./loadScreenAction";

const getUri = _ => `https://app.docketwise.com/oauth/authorize?response_type=${DOCKETWISE_RESPONSE_TYPE_CODE}&client_id=${DOCKETWISE_CLIENT_ID}&redirect_uri=${DOCKETWISE_REDIRECT_URI}&scope=${DOCKETWISE_SCOPE}`

export const actionCheckDocketwiseStatus = () => {
    return async (dispatch) => {
        try {
            const docketwise_status_action = localStorage.getItem(VNAME_DOCKETWISE_STATUS_ACTION) // #CURREMT APP STATE

            const sendRedirectURI = _ => {
                localStorage.setItem(VNAME_DOCKETWISE_STATUS_ACTION, VTYPE_DOCKETWISE_REDIRECT_URI) // REQUEST URI AUTH
                setRedirectURI(dispatch)
            }
            
            if (!docketwise_status_action) return sendRedirectURI()
            
            // Obtenes Auth Code
            switch(docketwise_status_action) {
                case VTYPE_DOCKETWISE_REDIRECT_URI:
                case VTYPE_DOCKETWISE_WAIT_AUTH_RESPONSE:
                    setRedirectURI(dispatch)
                    break;
                case VTYPE_DOCKETWISE_SAVED_AUTH_TOKENS:
                    const token = localStorage.getItem(VNAME_DOCKETWISE_USER_TOKEN)

                    if (!token) return sendRedirectURI()

                    var axiosConfig = generateAxiosConfig(token);
                    
                    const {data} = await axiosClient.get('/user', axiosConfig)

                    setTokens(dispatch, data)
                    dispatcHideLoadscreen(dispatch)
                    break;
            }

        } catch (err) {
            console.error("err", err)
            dispatch(setErr())
        }
    }
}

// SAVE CODE
export function actionSaveCodeAuth (code) {
    return async (dispatch) => {
        try {
            setCodeAuth(dispatch, code)
        } catch (err) {
            dispatch(setErr())
        }
    }
}

// Functions ----------------------------------
const setRedirectURI = dispatch => {
    const DOCKETWISE_URI = getUri()
                
    dispatch(changeStepReditectLink({
        uri: DOCKETWISE_URI,
        step: VTYPE_DOCKETWISE_REDIRECT_URI
    }))
}

const setCodeAuth = (dispatch, code) => {
    const url = "https://app.docketwise.com/oauth/token"

    const DOCKETWISE_CLIENT_ID = import.meta.env.VITE_DOCKETWISE_CLIENT_ID
    const DOCKETWISE_SECRET = import.meta.env.VITE_DOCKETWISE_SECRET
    const DOCKETWISE_REDIRECT_URI = import.meta.env.VITE_DOCKETWISE_REDIRECT_URI

    const authData = {
        client_id: DOCKETWISE_CLIENT_ID, 
        client_secret: DOCKETWISE_SECRET,
        grant_type: 'authorization_code',
        code,
        redirect_uri: DOCKETWISE_REDIRECT_URI
    }
    
    axios.post(url, qs.stringify(authData)).then(async function(response) {
        if (response) {
            const {data, status} = response

            if (status === 200) {
                const {access_token, refresh_token, expires_in, result: { id, attorney_profile, email }} = data
 
                const { first_name, last_name } = attorney_profile;
                
                const docketuser = {
                    firstName: first_name,
                    lastName: last_name,
                    email,
                    accessToken: access_token,
                    refreshToken: refresh_token,
                    //expiresIn: expires_in
                }
                
                const {data:_data} = await axiosClient.post('/user/authtokens', docketuser)
             
                const {user, token} = _data;

                localStorage.setItem(VNAME_DOCKETWISE_STATUS_ACTION, VTYPE_DOCKETWISE_SAVED_AUTH_TOKENS)
                localStorage.setItem(VNAME_DOCKETWISE_USER_TOKEN, token)

                dispatcHideLoadscreen(dispatch)
                setTokens(dispatch, user)
            }
        }
    }).catch(function(err) {

    });
}

const setTokens = (dispatch, user) => {
    dispatch(changeStepAuthTokens({
        user,
        step: VTYPE_DOCKETWISE_SAVED_AUTH_TOKENS
    }))
}

// Dispatch Functions --------------------------------------------
const changeStepReditectLink = data => ({
    type: DOCKETWISE_REDIRECT_TO_AUTHORIZATION_URL,
    payload: data
})

const changeStepAuthTokens = data => ({
    type: DOCKETWISE_SAVE_AUTHORIZATION_TOKENS,
    payload: data
})

// #ERR
const setErr = () => ({
    type: 'ERRR'
})