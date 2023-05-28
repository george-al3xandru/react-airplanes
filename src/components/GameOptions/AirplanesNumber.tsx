import { useContext, useState } from "react";
import { Slider, Text } from "@mantine/core";
import { IconPlane } from "@tabler/icons-react";
import { SettingsContext } from "../../context/SettingsProvider";

const AirplanesNumber = () => {
  const { airplanes, setAirplanes } = useContext(SettingsContext);
  const [value, setValue] = useState(airplanes);
  return (
    <>
      <Text fw="bold">Airplanes:</Text>
      <Slider
        value={value}
        onChange={setValue}
        onChangeEnd={setAirplanes}
        min={1}
        max={20}
        labelAlwaysOn
        thumbChildren={<IconPlane size="1rem" />}
        thumbSize={26}
        mt="50px"
      />
    </>
  );
};

export default AirplanesNumber;
