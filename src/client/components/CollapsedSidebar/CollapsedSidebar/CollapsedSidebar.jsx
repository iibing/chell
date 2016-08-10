import React, {PropTypes} from 'react'
import {Affix} from 'antd'
import CollapsedMenu from '../CollapsedMenu'
import Logout from '../Logout'
import CollapseSwitch from '../CollapseSwitch'
import CollapsedLogo from '../CollapsedLogo'

import styleIgnored from './style'

const propTypes = {
    collapse: PropTypes.bool.isRequired,
    onCollapseChange: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
}

const CollapsedSidebar = ({collapse, onCollapseChange, logout}) => (
    <aside className='layout-sider'>
        <CollapsedLogo/>
        <CollapsedMenu/>
        <CollapseSwitch collapse={collapse} onCollapseChange={onCollapseChange}/>
        <Logout collapse={collapse} logout={logout}/>
    </aside>
)

CollapsedSidebar.propTypes = propTypes

export default CollapsedSidebar