import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

export default function SidebarContainer(props) {
  const { active, placement = 'left', sticky = false } = props;
  const [isInit, setInit] = useState(true);
  const ref = useRef(null);

  const sidebarStyle = {};
  if (ref && ref.current) {
    if (isInit) setTimeout(() => setInit(false), 1000);
    const { width } = ref.current.children[0].getBoundingClientRect();
    if (!active) {
      if (placement === 'right') {
        sidebarStyle.marginLeft = null;
        sidebarStyle.marginRight = `-${width}px`;
      } else {
        sidebarStyle.marginRight = null;
        sidebarStyle.marginLeft = `-${width}px`;
      }
    }
    sidebarStyle.width = `${width}px`;
  }

  if (placement === 'right' && sticky) {
    console.warn('Sticky sidebar will be visible when inactive');
  }

  const Container = styled.div`
    display: flex;
    overflow: hidden;
    &.sticky-sidebar {
      overflow: visible;
    }
  `;
  const Content = styled.div`
    width: 100%;
  `;

  const Sidebar = styled.div`
    transition: all 0.5s;
    overflow: hidden;
    &.init {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    &.placement-left {
      box-shadow: 1px 0 rgba(0, 0, 0, 0.1);
      margin-right: 1em;
    }
    &.placement-right {
      order: 999;
      box-shadow: -1px 0 rgba(0, 0, 0, 0.1);
      margin-left: 1em;
    }
    &.sticky {
      position: sticky;
      height: 100vh;
      top: 0;
    }
  `;

  return (
    <Container className={classnames({ 'sticky-sidebar': sticky })}>
      <Sidebar
        className={classnames(`placement-${placement}`, {
          active,
          sticky,
          init: isInit && !active,
        })}
        ref={ref}
        style={sidebarStyle}
      >
        {props.sidebar}
      </Sidebar>
      <Content>{props.children}</Content>
    </Container>
  );
}
