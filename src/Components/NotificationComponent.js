import { notification } from 'antd';

export const showNotification = (desc, type, title) => {
    if (type === 'error') {
        notification.error({
            message: title,
            description: desc,
        });
    } else {
        notification.success({
            message: title,
            description: desc,
        });
    }
};