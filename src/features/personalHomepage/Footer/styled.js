import styled from "styled-components";

export const Wrapper = styled.footer `
  margin: 120px 0px 0px 0px;
`;

export const Content = styled.p `
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const Mail = styled.a `
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: 1s;
  
  &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
}
`;

export const Info = styled.p `
  font-weight: 400;
  font-size: 18px;
  margin: 24px 0px 56px 0px;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 140%;
  display: grid;
  grid-auto-columns: minmax(100px, 670px);

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 14px;
  }
`;