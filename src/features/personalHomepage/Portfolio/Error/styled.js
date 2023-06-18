import styled from "styled-components";
import { ReactComponent as Icon } from "../../../../common/images/Danger.svg";

export const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-top: 95px;
  max-width: 421px;
`;

export const StyledImg = styled(Icon)
`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledHeader = styled.h3 `
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 20px;
  };
`;

export const StyledText = styled.p `
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  };
`;

export const StyledButton = styled.a `
  border-radius: 4px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.buttonErrorColor};
  display: flex;
  gap: 16px;
  margin: 32px 0 20px 0;
`;