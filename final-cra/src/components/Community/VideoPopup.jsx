import React from 'react';
import styled from 'styled-components';

// const StyledVideoPopupWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.4);
//   position: fixed;
//   z-index: 999;
// `;

export const VideoPopup = ({ srcS: [srcState, setSrcSate] }, idx) => {
  console.log(srcState);
  return srcState && <div>안녕</div>;
};
