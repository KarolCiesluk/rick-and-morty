import styled, { css } from "styled-components";

import { ReactComponent as Arrow } from "./arrow.svg";

export const StyledPagination = styled.nav`
  text-align: center;
  margin-top: 40px;
`;

export const LeftArrow = styled(Arrow)`
  transform: rotate(180deg);
`;

export const PaginationButton = styled.button`
  background: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #9B7954;

  ${({ disabled }) => disabled && css`
    color: gray;
    cursor: not-allowed;
  `}
`;

export const PageNumber = styled.span`
  margin: 0 6px;
`;