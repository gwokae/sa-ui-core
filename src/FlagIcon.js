import React from 'react';
import classnames from 'classnames';

export default function(props) {
  const { code = '', className, border = true, rounded = true } = props;
  const style = {};
  if (props.size) {
    style.height = `${props.size}px`;
    style.width = style.height;
  }
  return (
    <span
      className={classnames(
        `flag-icon flag-icon-${code.toLowerCase()} align-middle`,
        { 'rounded-pill': rounded, border: border },
        className,
      )}
      style={style}
    ></span>
  );
}
