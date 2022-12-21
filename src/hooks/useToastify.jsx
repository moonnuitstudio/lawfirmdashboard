import { useSelector, useDispatch } from "react-redux";

import { toast } from 'react-toastify';

const useToastify = () => {
    
    const showErrToast = (msg) => {
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return {
        showErrToast
    }
}

export default useToastify