import sprite from "../../icons/sprite.svg";
import { LogList, LogListItem, Time, Text, Id, Icon } from "./Logger.styled";

export const Logger = ({ activities, text }) => {
  const icon = (type) => {
    let href;
    switch (type) {
      case "Likes":
        href = "#icon-like-color-30";
        break;
      case "Favourites":
        href = "#icon-Vector-348-Stroke";
        break;
      case "Dislike":
        href = "#icon-dislike-color-30";
        break;

      default:
        href = null;
    }
    return href;
  };

  return (
    <LogList>
      {activities.map((activity) => (
        <LogListItem key={activity.imageId}>
          <Time>{activity.time}</Time>{" "}
          <Text>
            Image ID: <Id>{activity.imageId}</Id> {text} {activity.type}
          </Text>
          <Icon width="20" height="20">
            <use href={sprite + icon(activity.type)} />
          </Icon>
        </LogListItem>
      ))}
    </LogList>
  );
};
