import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import styleIgnored from './style'

const propTypes = {
    collapse: PropTypes.bool.isRequired,
    onCollapseChange: PropTypes.func.isRequired,
}
const CollapseSwitch = ({collapse,onCollapseChange}) => (
    <div className='aside-action' onClick={onCollapseChange}>
        {
            collapse
            ? <Icon type='appstore-o' />
            : <div><Icon type='bars' />
                <span className='aside-action-text'></span>
              </div>
        }
    </div>
)

CollapseSwitch.propTypes = propTypes

export default CollapseSwitch

