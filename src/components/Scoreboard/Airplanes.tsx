import { Text } from "@mantine/core";
import React from "react";

interface AirplanesProps {
  airplanes: number;
  airplanesHit: number;
}

const Airplanes = (props: AirplanesProps) => {
  return (
    <Text fw="bolder" mt="md" align="center">
      Airplanes hit: {props.airplanesHit}/{props.airplanes}
    </Text>
  );
};

export default Airplanes;
