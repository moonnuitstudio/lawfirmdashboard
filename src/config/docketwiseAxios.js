import axios from 'axios'

import {
    VNAME_DOCKETWISE_USER_TOKEN
} from "../values/docketwiseValues"

const docketwiseAxios = axios.create({
    baseURL: `https://app.docketwise.com/api/v1`
}) 

const docketwiseGenerateConfig = () => {

    const token = localStorage.getItem(VNAME_DOCKETWISE_USER_TOKEN)

    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}


export default docketwiseAxios
export {
    docketwiseGenerateConfig
}