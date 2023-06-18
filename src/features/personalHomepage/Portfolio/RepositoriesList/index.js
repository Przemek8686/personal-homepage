import { useSelector } from "react-redux";
import { selectRepos } from "../portfolioSlice";
import {
  DemoLink,
  List,
  Content,
  Header,
  CodeLink,
  ListItem,
  CodeSpan,
  DemoSpan,
} from "./styled";

const RepositoriesList = () => {
  const repos = useSelector(selectRepos);

  return (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id}>
          <Header>{repo.name}</Header>
          <Content>{repo.description}</Content>
          <DemoSpan>
            Demo:
            <DemoLink href={repo.homepage}>{repo.homepage}</DemoLink>
          </DemoSpan>
          <CodeSpan>
            Code:
            <CodeLink href={repo.html_url}>{repo.html_url}</CodeLink>
          </CodeSpan>
        </ListItem>
      ))}
    </List>
  );
};
export default RepositoriesList;
