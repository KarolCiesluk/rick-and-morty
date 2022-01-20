interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <header>
    <h1>{children}</h1>
  </header>
);

export default Header;