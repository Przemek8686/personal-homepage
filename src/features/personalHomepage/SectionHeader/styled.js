import styled from "styled-components";
import { ReactComponent as Icon } from "../../../common/images/Message.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: auto;
    gap: 12px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-top: 20px;
  max-width: 398px;
  width: 30vw;
`;

export const Content = styled.div``;

export const Info = styled.p`
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 130%;
`;

export const Header = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  line-height: 1.4;
  margin: 36px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px 0 0 0;
  }
`;

export const MailButton = styled.a`
  padding: 12px 16px;
  border-radius: 4px;
  font-weight: 600;
  max-width: fit-content;
  height: 49px;
  margin: 32px 0 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.buttonLink.background};
  transition: 1s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.border};
  }
`;

export const MailIcon = styled(Icon)`
  margin-right: 18px;
`;
