import PropTypes from 'prop-types';
import clsx from 'clsx';

import './Bell.scss';

const Bell = ({ className, isActive, ...rest }) => {
  return (
    <button
      className={clsx([
        'Bell',
        className,
        {
          isActive,
        },
      ])}
      {...rest}
    >
      <i className="icon-bell"></i>
      <i className="icon-bell-alt"></i>
    </button>
  );
};

Bell.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Bell;
