import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  margin-top: 2rem;
  width: 100%;
  align-items: center;
  flex-direction: column;
  transition: color 0.2s ease-out;
`;

export const SmallWrapper = styled.div`
  width: 92%;
  margin: 0 auto;
`;
export const Contained = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
`;

export const StyledSection = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  justify-content: center;
  flex-direction: column;
  min-height: ${({ fullPage }) => {
    fullPage ? "100vh" : "auto";
  }};
`;
