import { Flex, Text } from "@mantine/core";
import React from "react";

interface ScoreInfoProps {
  icon: React.ReactNode;
  label: string;
}

const ScoreInfo = (props: ScoreInfoProps) => {
  return (
    <Flex align="center" gap="5px">
      {props.icon}
      <Text fw={500} mt="4px">
        {props.label}
      </Text>
    </Flex>
  );
};

export default ScoreInfo;
