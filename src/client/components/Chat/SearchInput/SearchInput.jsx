import React from 'react'
import {Input} from 'antd'
import styleIgnored from './style'

class SearchInput extends React.Component {
    render() {
        return (<Input className='search-input-group'  ref='searchPeople' size='large' placeholder='Seach people, group or topic(#)'/>)
    }
}

export default SearchInput