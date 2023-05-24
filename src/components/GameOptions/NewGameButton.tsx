import { Button, Group, GroupPosition, Variants } from "@mantine/core";

interface NewGameButtonProps {
  position: GroupPosition;
  variant: Variants<
    "filled" | "outline" | "light" | "white" | "default" | "subtle" | "gradient"
  >;
  reinitializeBoard: () => void;
}

const NewGameButton = (props: NewGameButtonProps) => {
  return (
    <Group position={props.position} mt="lg">
      <Button variant={props.variant} onClick={props.reinitializeBoard}>
        Play again
      </Button>
    </Group>
  );
};

export default NewGameButton;
