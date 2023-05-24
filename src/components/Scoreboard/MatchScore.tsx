import { Flex, Stack, Text } from "@mantine/core";
import { IconBombFilled } from "@tabler/icons-react";

interface Props {
  strikes: number;
  isGameFinished: boolean;
  align: React.CSSProperties["alignItems"];
}

const MatchScore = (props: Props) => {
  return (
    <Stack align={props.align} mt="lg">
      {props.isGameFinished && (
        <Text fw="bolder" fz={20} color="green">
          You won!
        </Text>
      )}
      <Flex gap="3px">
        <IconBombFilled />
        <Text fw="bolder">Strikes: {props.strikes}</Text>
      </Flex>
    </Stack>
  );
};

export default MatchScore;
