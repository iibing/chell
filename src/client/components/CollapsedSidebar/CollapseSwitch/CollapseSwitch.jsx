import React, {PropTypes} from 'react'
import {Icon} from 'antd'
import styleIgnored from './style'

const propTypes = {
    collapse: PropTypes.bool.isRequired,
    onCollapseChange: PropTypes.func.isRequired
}
const CollapseSwitch = ({collapse, onCollapseChange}) => (
    <div className='aside-action' onClick={onCollapseChange}>
        <img src="http://www.material-ui.com/images/ok-128.jpg" className='my-avatar'/>
        <div className='menu-icon'>
            {collapse
                ? ''
                : <Icon type='bars'/>}
        </div>
    </div>
)

CollapseSwitch.propTypes = propTypes

export default CollapseSwitch
