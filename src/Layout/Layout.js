import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import Navbar from "../Components/Navbar";
import GlobalStyles from "../utils/Global";
import theme from "../utils/theme";

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  transition: color 0.2s ease-out;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar />
        <MainWrapper>{children}</MainWrapper>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
