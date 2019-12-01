import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import {
  Wrapper,
  SmallWrapper,
  Contained,
  StyledSection
} from "../Layout/Elements";

const HeroContainer = styled.div`
  height: 36rem;
  width: 106rem;
  border-radius: 35px;
  background: linear-gradient(to right, #de6262, #ffb88c 58.42%);
`;

const Hero = () => {
  return (
    <div>
      <StyledSection fullheight id="header">
        <Contained>
          <Wrapper>
            <SmallWrapper>
              <HeroContainer></HeroContainer>
            </SmallWrapper>
          </Wrapper>
        </Contained>
      </StyledSection>
    </div>
  );
};

export default Hero;
