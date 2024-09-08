import styled, { css } from "styled-components";

const Button = styled.button`
  ${(props) =>
    props.type === "b1" &&
    css`
      background-color: blue;
    `}

  ${(props) =>
    props.type === "b2" &&
    css`
      background-color: red;
    `}

    ${(props) =>
    props.type === "b3" &&
    css`
      background-color: #d69509;
    `}
  color: white;
  font-size: 12px;
  text-transform: lowercase;
`;

export default Button;
