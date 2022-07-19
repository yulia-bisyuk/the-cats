import { Link } from "react-router-dom";
import sprite from "../../../../icons/sprite.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <svg width="106" height="24" style={{ marginBottom: "80px" }}>
        <use href={sprite + "#icon-logo"} />
      </svg>
    </Link>
  );
};
