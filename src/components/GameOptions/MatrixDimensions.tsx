import { useContext, useState } from "react";
import { Slider, Text } from "@mantine/core";
import { IconPlane } from "@tabler/icons-react";
import { SettingsContext } from "../../context/SettingsProvider";

const MatrixDimensions = () => {
  const { size, setSize } = useContext(SettingsContext);
  const [value, setValue] = useState(size);

  return (
    <>
      <Text fw="bold">Dimensions:</Text>
      <Slider
        value={value}
        onChange={setValue}
        onChangeEnd={setSize}
        min={5}
        max={20}
        label={(value) => `${value}x${value}`}
        labelAlwaysOn
        thumbChildren={<IconPlane size="1rem" />}
        thumbSize={26}
        mt="50px"
      />
    </>
  );
};

export default MatrixDimensions;
