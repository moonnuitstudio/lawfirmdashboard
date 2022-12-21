import React from 'react'

import useContextMenu from '../../../hooks/useContextMenu'

const ClickMenu = ({refcontainer}) => {
    const { anchorPoint, show } = useContextMenu(refcontainer)

    if (show) {
        return (
          <ul className="menu-test-right" style={{ top: anchorPoint.y, left: anchorPoint.x }}>
            <li>Share to..</li>
            <li>Cut</li>
            <li>Copy</li>
            <li>Paste</li>
            <hr />
            <li>Refresh</li>
            <li>Exit</li>
          </ul>
        );
    }

    return <></>;
}

export default ClickMenu