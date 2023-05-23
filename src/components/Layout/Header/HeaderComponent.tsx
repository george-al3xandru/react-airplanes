
import { useNavigate } from "react-router-dom";
import { Header, Group, Flex, Text } from "@mantine/core";
import { useHeaderStyles } from "./Header.styles";
import SettingsButton from "../../GameOptions/SettingsButton";

const HeaderComponent = () => {
  const { classes } = useHeaderStyles();
  const navigate = useNavigate();

  return (
    <Header height={60}>
      <Flex align="center" justify="space-between" className={classes.header}>
        <Group spacing="5px" className={classes.logo} onClick={() => navigate("/")}>
          <img src="/logo192.png" alt="logo" className={classes.logoImage} />
          <Text fw="bolder" fz={17}>
            Airplanes Game
          </Text>
        </Group>
        <SettingsButton />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
