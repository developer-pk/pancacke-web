import React from 'react';
import PropTypes from 'prop-types';
import './Switch.scss';

const Switch = ({ id, ...rest }) => {
  return (
    <div className="Switch">
      <label htmlFor={id}>
        <input type="checkbox" role="switch" id={id} name={id} {...rest} />
        <span className="overlay" data-on="V2" data-off="V1"></span>
        <span className="handle"></span>
      </label>
    </div>
  );
};

Switch.propTypes = {};

export default Switch;
