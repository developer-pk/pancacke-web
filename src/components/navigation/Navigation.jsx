import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Navigation = ({ elements, onClick, mobile, isOpen }) => {
  const handleOnClick = (event, disabled) => {
    if (disabled) {
      event.preventDefault();
    } else {
      onClick && onClick();
    }
  };

  return (
    <motion.ul
      layout
      initial={{ opacity: mobile ? 0 : 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: isOpen ? 0.3 : 0, duration: 0.2 }}
      className="Navigation"
    >
      {elements.map(({ label, href, exact, disabled, external }, index) => (
        <li key={`nav${index}`}>
          {external ? (
            <a href="https://tcake.io/contact/" target="_blank" rel="noreferrer">
              {label}
            </a>
          ) : (
            <NavLink
              exact={exact || false}
              onClick={(e) => {
                handleOnClick(e, disabled);
              }}
              activeClassName="active"
              className={clsx({ disabled: disabled || false })}
              to={href}
            >
              {label}
            </NavLink>
          )}
        </li>
      ))}
    </motion.ul>
  );
};

Navigation.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      exact: PropTypes.bool,
      disabled: PropTypes.bool,
    }),
  ),
  onClick: PropTypes.func,
  mobile: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default Navigation;
