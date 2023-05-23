import { Flex, Modal, Text } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import MatrixDimensions from "./MatrixDimensions";

interface SettingsModalProps {
  opened: boolean;
  close: () => void;
}

const ModalTitle = () => (
  <Flex>
    <IconSettings size={22} />
    <Text fw="bolder" ml="xs">
      Game Options
    </Text>
  </Flex>
);

const SettingsModal = (props: SettingsModalProps) => {
  return (
    <Modal opened={props.opened} onClose={props.close} title={<ModalTitle />}>
      <MatrixDimensions />
    </Modal>
  );
};

export default SettingsModal;
