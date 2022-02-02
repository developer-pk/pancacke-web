import clsx from 'clsx';
import React from 'react';
// import PropTypes from 'prop-types'
import './Card.scss';

const Header = ({ children }) => <div className="Header">{children}</div>;
const Body = ({ children }) => <div className="Body">{children}</div>;
const Footer = ({ children }) => <div className="Footer">{children}</div>;

const Card = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(['Card', className])} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
