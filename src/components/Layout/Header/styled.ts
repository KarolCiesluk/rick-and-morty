import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #c09b75;
  color: white;
  text-align: center;
  font-size: 28px;
  margin-bottom: 40px;
  padding: 0 8px;

  @media(max-width: 500px) {
    font-size: 20px;
  }
`;

StyledHeader.displayName = "header";