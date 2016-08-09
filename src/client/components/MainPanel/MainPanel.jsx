import React from 'react'
import styleIgnored from './style'

const MainPanel = (props) => (
    <div className="layout-main">
        <div className="layout-container">
            <div className="layout-content">
                {props.children}
            </div>
        </div>
    </div>
)

export default MainPanel