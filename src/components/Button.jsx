import React from 'react'
import PropTypes from 'prop-types'

// Primary Button
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true" style={{ marginLeft: '8px' }}>
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true" style={{ marginLeft: '8px' }}>
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

// Outline Button
const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-Outline ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true" style={{ marginLeft: '8px' }}>
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-Outline ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true" style={{ marginLeft: '8px' }}>
            {icon}
          </span>
        )}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string
};

export {
  ButtonPrimary,
  ButtonOutline
};
