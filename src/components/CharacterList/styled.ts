import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  grid-gap: 16px;
`;

export const ListItem = styled.li`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 14px;
`;

export const Section = styled.section`
  max-width: 900px;
  margin: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 28px;
`;