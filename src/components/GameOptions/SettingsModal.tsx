import { Flex, Modal, Text, Space } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import MatrixDimensions from "./MatrixDimensions";
import AirplanesNumber from "./AirplanesNumber";

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
      <Space h={20} />
      <AirplanesNumber />
    </Modal>
  );
};

export default SettingsModal;
