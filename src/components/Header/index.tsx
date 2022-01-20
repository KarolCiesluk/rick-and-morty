interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
};

export default Header;