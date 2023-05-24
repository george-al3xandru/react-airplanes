import { ActionIcon, Group, GroupPosition, Tooltip } from "@mantine/core";
import { IconScoreboard } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import ScoreboardModal from "./ScoreboardModal";
import { Scoreboard } from "../../common/types";

interface ScoreboardButtonProps {
  position: GroupPosition;
  scoreboard?: Scoreboard[];
}

const ScoreboardButton = (props: ScoreboardButtonProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Group position={props.position} mt="25px">
        <Tooltip label="Scoreboard">
          <ActionIcon variant="outline" size="lg" color="dark" onClick={open}>
            <IconScoreboard size={24} />
          </ActionIcon>
        </Tooltip>
      </Group>
      <ScoreboardModal opened={opened} close={close} scoreboard={props.scoreboard} />
    </>
  );
};

export default ScoreboardButton;
