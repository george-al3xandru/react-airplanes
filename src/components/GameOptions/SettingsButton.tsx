import { ActionIcon } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import SettingsModal from "./SettingsModal";

const SettingsButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon variant="outline" size="lg" onClick={open}>
        <IconSettings size={22} />
      </ActionIcon>
      <SettingsModal opened={opened} close={close} />
    </>
  );
};

export default SettingsButton;
