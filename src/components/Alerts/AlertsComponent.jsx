import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import './AlertsComponent.scss';
import AlertActions from '../../actions/alertActions';
import clsx from 'clsx';

const alertsRoot = document.getElementById('alerts');

const fadeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    duration: 0.4,
  },
};

const Alert = ({ heading, message, id, delay, type, customButton }) => {
  const dispatch = useDispatch();

  const removeAlert = () => dispatch(AlertActions.removeAlert(id));

  useEffect(() => {
    const timeoutId = setTimeout(removeAlert, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div {...fadeAnimation} layout className="Alert">
      <div>
        <p className="head">{heading}</p>
        <p className="message">{message}</p>
      </div>
      {customButton ? (
        <button onClick={customButton.onClick}>{customButton.label}</button>
      ) : (
        <button onClick={removeAlert}>Dissmiss</button>
      )}
    </motion.div>
  );
};

export const AlertsComponent = () => {
  const alerts = useSelector((store) => store.Alert);

  return createPortal(
    <AnimateSharedLayout>
      <div className={clsx(['AlertsComponent', { hasAlerts: alerts.length > 0 }])}>
        <AnimatePresence>
          {alerts.map((alert) => (
            <Alert key={alert.id} {...alert} />
          ))}
        </AnimatePresence>
      </div>
    </AnimateSharedLayout>,
    alertsRoot,
  );
};
