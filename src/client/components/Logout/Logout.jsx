import React, { PropTypes } from 'react'
import { Icon } from 'antd'
import styleIgnored from './style'

const propTypes = {
    collapse: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

const Logout = ({collapse, logout}) => (
    <div className='logout-action' onClick={logout}>
        {
            collapse
                ? <Icon type='logout' />
                : <div>
                    <Icon type='logout' />
                    <span className='logout-action-text'>Logout</span>
                 </div>
        }
    </div>
)

Logout.propTypes = propTypes
export default Logout
