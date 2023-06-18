import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../features/personalHomepage/ThemeSwitch/themeSlice";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "../../common/Container/styled";
import SectionHeader from "../../features/personalHomepage/SectionHeader";
import SkillsList from "../../features/personalHomepage/Skills";
import Portfolio from "../../features/personalHomepage/Portfolio";
import Footer from "../../features/personalHomepage/Footer";
import {
    nextSkills,
    skillsList,
} from "../../features/personalHomepage/Skills/skillsData";

function App() {
    const inDarkMode = useSelector(selectIsDarkTheme);

    return ( <
        ThemeProvider theme = { inDarkMode ? darkTheme : lightTheme } >
        <
        GlobalStyle / >
        <
        Container >
        <
        SectionHeader / >
        <
        SkillsList tittle = "My skillset includes 🛠"
        skills = { skillsList }
        /> <
        SkillsList tittle = "What I want to learn next 🚀"
        skills = { nextSkills }
        /> <
        Portfolio / >
        <
        Footer / >
        <
        /Container> <
        /ThemeProvider>
    );
}

export default App;