import styled, { css } from "styled-components";
import { ReactComponent as Icon } from '../../../common/images/buttonIcon.svg';

export const Container = styled.div `
  display: inline;
  float: right;
`;

export const ButtonText = styled.span `
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
}
`;

export const Box = styled.span `
  background-color: ${({ theme }) => theme.colors.themeSwitch.backgroundIcon};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;

  ${({ moveSwitch }) => moveSwitch && css`
transform: translateX(22 px);
`}
`;

export const ButtonIcon = styled(Icon)
`
  color: ${({ theme }) => theme.colors.themeSwitch.colorIcon};
`;

export const StyledButton = styled.button `
  padding: 2px;
  width: 48px;
  height: 26px;
  border-radius: 14px;
  margin-left: 12px;
  background-color: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid ${({ theme }) => theme.colors.themeSwitch.border};
`;