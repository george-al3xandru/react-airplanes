import { Stack, Text } from "@mantine/core";

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
      <Text fw="bolder">Strikes: {props.strikes}</Text>
    </Stack>
  );
};

export default MatchScore;
