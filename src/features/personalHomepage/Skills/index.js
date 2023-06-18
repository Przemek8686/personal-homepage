import { List, ListItem, SectionHeader, StyledContainer } from "./styled";

const SkillsList = ({ skills, tittle }) => (
  <StyledContainer>
    <SectionHeader> {tittle} </SectionHeader>{" "}
    <List>
      {" "}
      {skills.map((skill) => (
        <ListItem key={skill}> {skill} </ListItem>
      ))}{" "}
    </List>{" "}
  </StyledContainer>
);

export default SkillsList;
