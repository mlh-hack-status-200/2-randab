import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: white;
  border-radius: 20px;
  margin-top: 4rem;
  text-transform: uppercase;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.1s ease-out;
  width: 16rem;
  border: 1px solid black;
  outline: none;
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  padding: 1.3rem 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 20px rgba(7, 49, 69, 0.1);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(7, 49, 69, 0.1);
  }
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
