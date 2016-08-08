import React from 'react'

import CollapsedSidebar from '../CollapsedSidebar'
import MainPannel from '../MainPannel'
import styleIgnored from './style'

class MainBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {collapse: true}
        this.onCollapseChange = this.onCollapseChange.bind(this)
    }
    onCollapseChange() {
        this.setState({collapse: !this.state.collapse})
    }
    logout() {
        
    }
    render() {
        const collapse = this.state.collapse
        return (
            <div className={collapse? 'layout-aside layout-aside-collapse': 'layout-aside'}>
                <CollapsedSidebar collapse={this.state.collapse} onCollapseChange={this.onCollapseChange} logout={this.logout}/>
                <MainPannel>{this.props.children}</MainPannel>
            </div>
        )
    }
}

export default MainBody