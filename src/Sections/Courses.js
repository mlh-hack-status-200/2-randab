import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  SmallWrapper,
  Contained,
  StyledSection
} from "../Layout/Elements";
import Web from "../../SVG/web.svg";

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CoursesLeft = styled.div`
  flex-grow: 0.6;
  margin-right: 4rem;
  width: 0rem;
  height: 34rem;
  border-radius: 18px;
  background: linear-gradient(to bottom right, #f8cf61, #ffb88c 58.42%);
`;
const CoursesRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 9;
`;

const CourseColumn1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 9;
`;
const CoursesRight1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-grow: 3;
  background: linear-gradient(to right, #feada6, #f5efef);
  border-radius: 17px;
  height: 15rem;
  margin-right: 3rem;

  .h3 {
    margin-top: 3rem;
    margin-left: -37rem;
    left: 5rem;
    font-family: "Raleway";
    font-size: 1.9rem;
    font-weight: 900;
    color: #2f2f2f;
  }
`;
// const CoursesRight2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   flex-grow: 3;
//   background: linear-gradient(to right, #feada6, #f5efef);
//   border-radius: 17px;
//   height: 15rem;
//   margin-right: 3rem;
// `;

const WebImage = styled.svg`
  background-image: url(${Web});
  background-repeat: no-repeat;
  height: 5.5rem;
  margin-top: 4.5rem;
  margin-left: -15rem;
`;

const Courses = () => {
  return (
    <StyledSection fullheight id="courses">
      <Contained>
        <Wrapper style={{ width: "93%" }}>
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
                <CourseColumn1>
                  <CoursesRight1>
                    <WebImage />
                    <h3 className="h3">
                      Web Development
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "200",
                          fontFamily: "Nunito"
                        }}
                      >
                        Learn website building from <br />
                        scratch using Html, Css, Js
                      </p>
                    </h3>
                  </CoursesRight1>
                  <CoursesRight1>
                    <WebImage />
                    <h3 className="h3">
                      Web Development
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "200",
                          fontFamily: "Nunito"
                        }}
                      >
                        Learn website building from <br />
                        scratch using Html, Css, Js
                      </p>
                    </h3>
                  </CoursesRight1>
                </CourseColumn1>

                <CourseColumn1>
                  <CoursesRight1>
                    <WebImage />
                    <h3 className="h3">
                      Web Development
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "200",
                          fontFamily: "Nunito"
                        }}
                      >
                        Learn website building from <br />
                        scratch using Html, Css, Js
                      </p>
                    </h3>
                  </CoursesRight1>
                  <CoursesRight1>
                    <WebImage />
                    <h3 className="h3">
                      Web Development
                      <p
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: "200",
                          fontFamily: "Nunito"
                        }}
                      >
                        Learn website building from <br />
                        scratch using Html, Css, Js
                      </p>
                    </h3>
                  </CoursesRight1>
                </CourseColumn1>
              </CoursesRight>
            </CoursesContainer>
          </SmallWrapper>
        </Wrapper>
      </Contained>
    </StyledSection>
  );
};

export default Courses;
