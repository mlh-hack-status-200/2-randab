import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  SmallWrapper,
  Contained,
  StyledSection
} from "../Layout/Elements";

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CoursesLeft = styled.div`
  flex-grow: 0.6;
  margin-right: 10rem;
  width: 0rem;
  height: 34rem;
  border-radius: 18px;
  background: linear-gradient(to bottom right, #f8cf61, #ffb88c 58.42%);
`;
const CoursesRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 9;
`;
const CoursesRight1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 5;
  background: linear-gradient(to right, #feada6, #f5efef);
  border-radius: 17px;
  height: 15rem;
`;
const CoursesRight2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 5;
`;

const Courses = () => {
  return (
    <StyledSection fullheight id="courses">
      <Contained>
        <Wrapper>
          <SmallWrapper>
            <CoursesContainer>
              <CoursesLeft>
                <h2
                  style={{
                    transform: "rotateZ(90deg)",
                    fontSize: "2.7rem",
                    color: "white",
                    marginTop: "7rem"
                  }}
                >
                  CATEGORIES
                </h2>
              </CoursesLeft>
              <CoursesRight>
                <CoursesRight1></CoursesRight1>
                <CoursesRight2></CoursesRight2>
              </CoursesRight>
            </CoursesContainer>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Courses;
