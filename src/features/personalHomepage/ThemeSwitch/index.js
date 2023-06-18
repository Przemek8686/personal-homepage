import { useDispatch, useSelector } from "react-redux";
import { ButtonText, StyledButton, Container, ButtonIcon, Box } from "./styled";
import { selectIsDarkTheme, toggleTheme, } from "./themeSlice";

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(selectIsDarkTheme);

    return ( <
        Container >
        <
        ButtonText > Dark mode { isDarkMode ? "on" : "off" } < /ButtonText> <
        StyledButton onClick = {
            () => (dispatch(toggleTheme())) } >
        <
        Box moveSwitch = { isDarkMode } >
        <
        ButtonIcon / >
        <
        /Box> <
        /StyledButton> <
        /Container>
    )
};
export default ThemeSwitch;