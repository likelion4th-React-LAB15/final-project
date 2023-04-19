import { forwardRef } from 'react';
import styled from 'styled-components';

/* Higher-order Component ------------------------------------------------------ */

export const A11yHidden = forwardRef(function A11yHidden(
  { focusable = false, className = '', ...restProps },
  ref
) {
  const combinedClassNames = `${focusable ? focusable : ''} ${className}`.trim();

  return <Component ref={ref} className={combinedClassNames} {...restProps} />;
});

const Component = styled.span` 
  overflow: hidden;
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  caption.A11yHidden {
    position: static;
  }
  
  .focusable:focus {
    position: static;
    clip: auto;
    clip-path: unset;
    width: initial;
    height: initial;
    margin: initial;
    border: initial;
    padding: initial;
    white-space: initial;
  }
`