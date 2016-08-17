import {notification}  from 'antd'

const openNotification = (type, message, description) => {
    if(type) {
        notification[type]({
            message: message,
            description: description,
            duration: 2
        })
    }
}

export default openNotification