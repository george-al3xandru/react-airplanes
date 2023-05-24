import { Divider } from "@mantine/core";
import { IconBombFilled, IconCalendar, IconClock } from "@tabler/icons-react";
import { Scoreboard } from "../../common/types";
import ScoreInfo from "./ScoreInfo";

interface ScoreboardCardProps {
  score: Scoreboard;
}

const ScoreboardCard = (props: ScoreboardCardProps) => {
  const formattedTime = props.score.date.toLocaleString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
      <ScoreInfo icon={<IconCalendar />} label={formattedTime} />
      <ScoreInfo icon={<IconClock />} label={`${props.score.time} seconds`} />
      <ScoreInfo icon={<IconBombFilled />} label={`${props.score.strikes}`} />
      <Divider my="md" />
    </>
  );
};

export default ScoreboardCard;
