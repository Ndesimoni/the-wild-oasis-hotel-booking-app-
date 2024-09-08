import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: gray;
      font-size: 17px;
      font-weight: bold;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: #02a402;
      font-size: 14px;
      font-weight: bold;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      color: #e81313;
      font-size: 12px;
      font-weight: bold;
    `}


  text-transform: capitalize;
`;

export default Heading;
