import { useSelector, useDispatch } from "react-redux";

import { getAllMatters } from "../actions/mattersAction";

const useMatters = () => {
    const dispatch = useDispatch()
    const {matters, columnNames} = useSelector(state => state.matters)
    const { isAuth, user } = useSelector(state => state.docketwise)

    const loadAllMatters = () => {
        if (isAuth) {
            const token = user.accessToken
            
            dispatch(getAllMatters(token))
        }
    }

    return {
        matters,
        columnNames,
        loadAllMatters
    }
}

export default useMatters