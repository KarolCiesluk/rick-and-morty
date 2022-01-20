import { StyledHeader } from "./styled";

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <h1>{children}</h1>
  </StyledHeader>
);

export default Header;