import { 
    LOAD_ALL_MATTERS 
} from "../types/mattersType";

import docketwiseAxios from "../config/docketwiseAxios";
import { generateAxiosConfig } from "../helpers/connection";

export const getAllMatters = (token) => {
    return async (dispatch) => {
        try {
            const headerConfig = generateAxiosConfig(token)

            const { data } = await docketwiseAxios.get('/matters', headerConfig)
            
            if (data) dispatch(loadMattersSucces(data)) 
            else throw 'Data not valid';

        } catch (err) {
            dispatch(loadMatterError())
        }
    }
}

const loadMattersSucces = data => ({
    type: LOAD_ALL_MATTERS,
    payload: data
})

const loadMatterError = () => ({
    type: 'ERRR'
})
