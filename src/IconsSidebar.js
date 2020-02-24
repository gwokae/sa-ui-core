import React from 'react';
import styled from 'styled-components';
const PADDING = 0.6;
const LENGTH = 64;
const OL = styled.ol`
  height: 100%;
  width: calc(${LENGTH}px + ${PADDING * 2}em);
`;

const IconsSidebar = (props) => {
  return (
    <OL
      className='list-unstyled d-flex flex-column bg-dark'
      title={props.title || false}
    >
      {props.children}
    </OL>
  );
};

IconsSidebar.Item = styled.li`
  display: block;
  margin: ${PADDING * 0.5}em 0;
  width: 100%;
  height: ${LENGTH}px;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover,
  &.active {
    color: rgba(255, 255, 255, 0.75);
    font-weight: 600;
  }
  &.active {
    > .text {
      text-shadow: 1px 1px 1px rgba(192, 192, 192, 0.75);
    }
  }
  > .text {
    font-size: 0.8em;
  }
`;

export default IconsSidebar;
