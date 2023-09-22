import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

export const Notification = ({ message }) => {
    return message && (<NotificationMessage>{message}</NotificationMessage>);
}
Notification.prorTypes = {
    message: PropTypes.string,
}
