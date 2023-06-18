import styled from "styled-components";

export const List = styled.ul `
  margin: 24px 0px 0px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 0px;
  list-style: none;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ListItem = styled.li `
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.repositoriesList.border};
  border-radius: 4px;
  list-style: none;
  margin: 0px;
  max-width: 575px;
  padding: 50px;
  transition: 1s;

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.repositoriesList.borderHover};
    }
`;

export const Header = styled.h3 `
  color: ${({ theme }) => theme.colors.repositoriesList.header};
  font-weight: 700;
  font-size: 24px;
  margin: 0px 0px 24px;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const Content = styled.p `
  color: ${({ theme }) => theme.colors.repositoriesList.text};
  margin-top: 0px;

  @media (max-width:${({ theme }) => theme.breakpoint.tabletMax}px) and (min-width:${({ theme }) => theme.breakpoint.tabletMin}px) {
    font-size: 14px;
  }
`;

export const CodeLink = styled.a `
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.repositoriesList.link};
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.borderLink};

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.linkHover};
    transition: 1s;
    }
`;

export const DemoLink = styled.a `
  text-decoration: none;
  color: ${({ theme }) => theme.colors.repositoriesList.link};
  border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.borderLink};


  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.repositoriesList.linkHover};
    transition: 1s;
    }
`;

export const DemoSpan = styled.span `
  margin: 24px 0 8px 0;
  display: grid;
  grid-template-columns: 4em 1fr;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;

export const CodeSpan = styled.span `
  
  display: grid;
  grid-template-columns: 4em 1fr;

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;