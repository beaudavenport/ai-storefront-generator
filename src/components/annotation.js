import React from 'react';
import { PropTypes } from 'prop-types';

const Annotation = ({
  placement, children, isActive = false,
}) => (
  <div className={`popover is-popover-${placement} ${isActive ? 'is-popover-active' : ''}`}>
    <div className="popover-content">
      {children}
    </div>
  </div>
);

Annotation.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

Annotation.defaultProps = {
  placement: 'top',
  isActive: false,
};

export default Annotation;
