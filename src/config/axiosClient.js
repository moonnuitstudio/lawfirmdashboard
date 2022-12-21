import axios from 'axios'

import { VNAME_DOCKETWISE_USER_TOKEN } from '../values/docketwiseValues'

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
}) 

export default axiosClient