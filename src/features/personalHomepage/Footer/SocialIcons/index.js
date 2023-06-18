import { socials } from "./social";
import { Link, List, ListItem } from "./styled";

const SocialIcons = () => (
  <List>
    {" "}
    {socials.map(({ Icon, name, url }) => (
      <ListItem key={name}>
        <Link href={url}>
          <Icon />
        </Link>{" "}
      </ListItem>
    ))}{" "}
  </List>
);

export default SocialIcons;
