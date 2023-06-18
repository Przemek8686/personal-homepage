import styled from "styled-components";

export const StyledIcon = (Icon) => styled(Icon)`
  height: auto;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
`;

export const ListItem = styled.li`
  margin: 0px 24px 0px 0px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
