import styled, { css } from '@xstyled/styled-components';


// Common CSS
export const displayflex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const displayflexMobile = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;
// Background
export const bg = styled.div`
  height: 60vh;
  padding-top: 2em;
`;