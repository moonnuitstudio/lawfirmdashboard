import { useState, useCallback, useEffect } from "react";

const useContextMenu = (refContainer) => {
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const handleContextMenu = useCallback(
        (event) => {
          event.preventDefault();
          setAnchorPoint({ x: event.pageX, y: event.pageY });
          setShow(true);
        },
        [setShow, setAnchorPoint, refContainer]
    );
    
    const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

    useEffect(() => {
                refContainer?.current?.addEventListener("click", handleClick);
                refContainer?.current?.addEventListener("contextmenu", handleContextMenu);
        return () => {
                  refContainer?.current?.removeEventListener("click", handleClick);
                  refContainer?.current?.removeEventListener("contextmenu", handleContextMenu);
        };
    });  

    return { 
        anchorPoint, 
        show,
        refContainer
    };
}

export default useContextMenu;