import { AlertConstants } from '../constants';

const DEFAULT_DELAY = 5000;
let id = 0;

const warning = ({ heading, message, delay = DEFAULT_DELAY, customButton }) => ({
  type: AlertConstants.WARNING_ALERT,
  payload: {
    type: 'WARNING',
    id: id++,
    heading,
    message,
    delay,
    customButton,
  },
});

const success = ({ heading, message, delay = DEFAULT_DELAY, customButton }) => ({
  type: AlertConstants.SUCCESS_ALERT,
  payload: {
    type: 'SUCCESS',
    id: id++,
    heading,
    message,
    delay,
    customButton,
  },
});

const removeAlert = (id) => ({
  type: AlertConstants.REMOVE_ALERT,
  payload: id,
});

const AlertActions = {
  warning,
  success,
  removeAlert,
};

export default AlertActions;
