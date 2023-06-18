import { useDispatch } from "react-redux";
import { fetchPortfolioError } from "../portfolioSlice";
import { useEffect } from "react";
import {
  Container,
  StyledText,
  StyledButton,
  StyledHeader,
  StyledImg,
} from "./styled";

const Error = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolioError());
  }, [dispatch]);

  return (
    <Container>
      <StyledImg />
      <StyledHeader> Ooops!Something went wrong... </StyledHeader>{" "}
      <StyledText>
        {" "}
        Sorry, failed to load Github projects. <br /> You can check them
        directly on Github.{" "}
      </StyledText>{" "}
      <StyledButton href="https://github.com/jakub2787">
        {" "}
        Go to Github{" "}
      </StyledButton>{" "}
    </Container>
  );
};

export default Error;
