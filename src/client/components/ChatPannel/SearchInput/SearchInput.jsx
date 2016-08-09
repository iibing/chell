import React from 'react'
import {Input} from 'antd'
import styleIgnored from './style'

class SearchInput extends React.Component {
    render() {
        return (<div className='search-input'><Input ref='searchPeople' size='large' placeholder='Seach people, group or topic(#)'/></div>)
    }
}

export default SearchInput