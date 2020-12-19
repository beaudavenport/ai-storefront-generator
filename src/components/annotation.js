import { place } from 'random-name';
import React from 'react';

const Annotation = ({
  placement, children, isActive,
}) => (
  <div className={`popover is-popover-${placement || 'top'} ${isActive ? 'is-popover-active' : ''}`}>
    <div className="popover-content">
      {children}
    </div>
  </div>
);

export default Annotation;
