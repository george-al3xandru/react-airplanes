import { ActionIcon, Tooltip } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import SettingsModal from "./SettingsModal";

const SettingsButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Tooltip label="Settings">
        <ActionIcon variant="outline" size="lg" color="dark" onClick={open}>
          <IconSettings size={22} />
        </ActionIcon>
      </Tooltip>
      <SettingsModal opened={opened} close={close} />
    </>
  );
};

export default SettingsButton;
