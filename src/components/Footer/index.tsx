interface FooterProps {
  footerText: string;
}

const Footer = ({ footerText }: FooterProps) => (
  <footer>
    <span>{footerText}</span>
  </footer>
);

export default Footer;