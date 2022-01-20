import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: #dddddd;
  cursor: pointer;
  transition: brightness 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;