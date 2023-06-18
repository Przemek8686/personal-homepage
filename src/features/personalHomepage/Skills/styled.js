import styled from "styled-components";

export const List = styled.ul `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  line-height: 140%;
  gap: 8px 32px;
  padding: 0;
  margin-top: 32px;

  @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) and (min-width:${({ theme }) => theme.breakpoint.tabletMin}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li `
  list-style: none;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
}

  &::before {
    content: "●";
    color: ${({ theme }) => theme.colors.primary};
    padding-right: 16px;
  }
`;

export const StyledContainer = styled.section `
  margin: 63px 0 0 0;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  padding: 32px;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    margin: 50px 0 0 0;
}
`;

export const SectionHeader = styled.h2 `
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerLine};
  padding-bottom: 16px;
  margin: 0px;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    padding-bottom: 12px; 
}
`;