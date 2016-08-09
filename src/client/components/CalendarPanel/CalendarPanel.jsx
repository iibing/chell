import React from 'react'
import {Calendar} from 'antd'
import enUS from 'antd/lib/calendar/locale/en_US'
import styleIgnored from './style'

const CalendarPanel = () => (
    <div className='calendar-pannel'>
        <Calendar locale={enUS}/>
    </div>
)

export default CalendarPanel
