import { StyledFooter } from "./styled";

interface FooterProps {
  footerText: string;
}

const Footer = ({ footerText }: FooterProps) => (
  <StyledFooter>
    <span>{footerText}</span>
  </StyledFooter>
);

export default Footer;