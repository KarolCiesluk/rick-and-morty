import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header>Rick and Morty app</Header>
    <main>
      {children}
    </main>
    <Footer footerText="© 2022 | Coded by Karol Cieśluk" />
  </div>
);

export default Layout;