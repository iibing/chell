import React from 'react'
import styleIgnored from './style'

const MainPannel = (props) => (
    <div className="layout-main">
        <div className="layout-container">
            <div className="layout-content">
                {props.children}
            </div>
        </div>
    </div>
)

export default MainPannel