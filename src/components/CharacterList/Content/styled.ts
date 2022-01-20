import styled, { keyframes } from "styled-components";

import { ReactComponent as LoadingIcon } from "./loader.svg";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled(LoadingIcon)`
  animation: ${rotate} 2s linear infinite;
  width: 86px;
  height: auto;
  margin-top: 60px;
`;



