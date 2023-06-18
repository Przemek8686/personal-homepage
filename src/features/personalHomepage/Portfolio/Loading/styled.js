import styled from "styled-components";
import { ReactComponent as Icon } from "../../../../common/images/icon-spinner.svg";

export const Info = styled.p `
  margin-top: 88px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 17px;
  }
`;

export const LoadingSpinner = styled(Icon)
`
  display: flex;
  justify-self: center;
  margin: 48px 0 140px 0;
  color: ${({ theme }) => theme.colors.primary};
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;