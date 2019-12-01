import React from "react";
import styled from "styled-components";
import HeroSvg from "../../SVG/hero_svg.svg";

import {
  Wrapper,
  SmallWrapper,
  Contained,
  StyledSection
} from "../Layout/Elements";
import Button from "../Components/Buttons/Button";

const HeroContainer = styled.div`
  height: 33rem;
  width: 106rem;
  border-radius: 35px;
  background: linear-gradient(to right, #de6262, #ffb88c 58.42%);
`;

const HeroContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeroMainLeft = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  margin-top: 3rem;
`;
const HeroHeading = styled.h1`
  font-size: 4rem;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  line-height: 5rem;
  color: #282828;
`;
const HeroParra = styled.p`
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  font-weight: lighter;
  margin-top: 3rem;
  width: 30rem;
  color: #282828;
`;

const HeroRight = styled.div`
  position: absolute;
`;

const HeroPhoto = styled.svg`
  background-image: url(${HeroSvg});
  background-repeat: no-repeat;
  position: absolute;
  left: 62rem;
  transform: scale(1.3);
  height: 20rem;
  margin-top: 7rem;
`;
const Hero = () => {
  return (
    <div>
      <StyledSection fullheight id="header">
        <Contained>
          <Wrapper>
            <SmallWrapper>
              <HeroContainer>
                <HeroContent>
                  <HeroMainLeft>
                    <HeroHeading>
                      Get Free <br /> Education <br />
                    </HeroHeading>
                    <HeroParra>
                      We Provide free education to all folks irrespective of
                      their background
                    </HeroParra>
                    <Button>Get Started</Button>
                  </HeroMainLeft>
                  <HeroRight>
                    <HeroPhoto />
                  </HeroRight>
                </HeroContent>
              </HeroContainer>
            </SmallWrapper>
          </Wrapper>
        </Contained>
      </StyledSection>
    </div>
  );
};

export default Hero;
