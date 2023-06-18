import SocialIcons from "./SocialIcons";
import { Wrapper, Content, Mail, Info } from "./styled";

const Footer = () => (
    <Wrapper>
        <Content>Let's talk</Content>
        <Mail href="mailto:jakubwozny28@gmail.com">jakubwozny28@gmail.com</Mail>
        <Info>
            I'm always open to new projects whenever I have the time.
            If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me &nbsp;👇
        </Info>
        <SocialIcons />
    </Wrapper>
);

export default Footer;