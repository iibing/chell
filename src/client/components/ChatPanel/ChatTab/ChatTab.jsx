import React from 'react'
import {Tabs} from 'antd'

const TabPane = Tabs.TabPane

const ChatTab = () => (
    <Tabs hideAdd activeKey={this.state.activeKey} type="editable-card">
        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
    </Tabs>
)