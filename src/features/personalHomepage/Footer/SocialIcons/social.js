import { ReactComponent as FacebookIcon } from "../../../../common/images/FacebookIcon.svg";
import { ReactComponent as GithubIcon } from "../../../../common/images/GithubIcon.svg";
import { StyledIcon } from "./styled";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/jakub2787",
    Icon: StyledIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/jakub.wozny.568/",
    Icon: StyledIcon(FacebookIcon),
  },
];
