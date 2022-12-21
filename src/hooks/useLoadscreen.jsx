import { useSelector, useDispatch } from "react-redux";

import { setShowLoadScreen, setHideLoadScreen } from "../actions/loadScreenAction";

const useLoadscreen = () => {
    const dispatch = useDispatch()
    const {isLoadscreenVisible} = useSelector(state => state.loadscreen)

    const showLoadscreen = () => dispatch(setShowLoadScreen())
    const hideLoadscreen = () => dispatch(setHideLoadScreen())

    return {
        isLoadscreenVisible,
        showLoadscreen,
        hideLoadscreen
    }
}

export default useLoadscreen