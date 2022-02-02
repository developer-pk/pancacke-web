import React from 'react';
import PropTypes from 'prop-types';
import './SocialNav.scss';

const SocialNav = ({ elements, ...rest }) => {
  return (
    <ul className="SocialNav" {...rest}>
      {elements.map(({ href, label }, index) => (
        <li key={`socialNav${index}`}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

SocialNav.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.element,
    }),
  ),
};

export default SocialNav;
