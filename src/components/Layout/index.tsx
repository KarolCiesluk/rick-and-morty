import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./styled";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Header>Rick and Morty app</Header>
    <main>
      {children}
    </main>
    <Footer footerText="© 2022 | Coded by Karol Cieśluk" />
  </Container>
);

export default Layout;