import { Divider, Flex, Modal, Text } from "@mantine/core";
import { IconScoreboard } from "@tabler/icons-react";
import { Scoreboard } from "../../common/types";
import ScoreboardCard from "./ScoreboardCard";

interface SettingsModalProps {
  opened: boolean;
  close: () => void;
  scoreboard?: Scoreboard[];
}

const ModalTitle = () => (
  <Flex>
    <IconScoreboard size={24} />
    <Text fw="bolder" ml="xs">
      Scoreboard
    </Text>
  </Flex>
);

const SettingsModal = (props: SettingsModalProps) => {
  const scoreboardCards = props.scoreboard
    ?.sort((a, b) => a.strikes - b.strikes)
    .map((score) => <ScoreboardCard key={score.id} score={score} />);

  return (
    <Modal opened={props.opened} onClose={props.close} title={<ModalTitle />}>
      <Divider my="md" />
      {scoreboardCards?.length ? (
        scoreboardCards
      ) : (
        <Text fw={500} mt="md" align="center">
          No match history
        </Text>
      )}
    </Modal>
  );
};

export default SettingsModal;
