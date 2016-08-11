import React from 'react'
import {Menu, Icon} from 'antd'
import styleIgnored from './style'
import {Link} from 'react-router'

const CollapsedMenu = () => (
    <Menu mode="inline" theme="dark" defaultSelectedKeys={['boards']}>
        <Menu.Item key="boards">
            <Link to='/'>
                <Icon type="credit-card"/>
                <span className="nav-text">Boards</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="tasks">
            <Link to='/tasks'>
                <Icon type="code"/>
                <span className="nav-text">Tasks</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="team">
            <Link to='/team'>
                <Icon type="team"/>
                <span className="nav-text">Team</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="calender">
            <Link to='/calendar'>
                <Icon type="calendar"/>
                <span className="nav-text">Calender</span>
            </Link>
        </Menu.Item>
        <Menu.Item key="settings">
            <Link to='/settings'>
                <Icon type="setting"/>
                <span className="nav-text">Settings</span>
            </Link>
        </Menu.Item>
    </Menu>
)

export default CollapsedMenu