import { Container } from "../../common/Container/styled";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { selectIsDarkTheme } from "../../features/personalHomepage/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import SectionHeader from "../../features/personalHomepage/sectionHeaderHeader";
import Footer from "../../features/personalHomepage/Footer";
import Portfolio from "../../features/personalHomepage/Portfolio";
import SkillsList from "../../features/personalHomepage/Skills";
import {
    nextSkills,
    skillsList,
} from "../../features/personalHomepage/Skills/skillsData";

function App() {
    const isDarkMode = useSelector(selectIsDarkTheme);

    return ( <
        ThemeProvider theme = { isDarkMode ? darkTheme : lightTheme } >
        <
        GlobalStyle / >
        <
        Container >
        <
        SectionHeader / >
        <
        SkillsList tittle = "My skillset includes 🛠️"
        skills = { skillsList }
        />{" "} <
        SkillsList tittle = "What I want to learn next&nbsp;🚀"
        skills = { nextSkills }
        />{" "} <
        Portfolio / >
        <
        Footer / >
        <
        /Container>{" "} <
        /ThemeProvider>
    );
}

export default App;