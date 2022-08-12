import { Link } from "react-router-dom";
import sprite from "../../../icons/sprite.svg";

export const Logo = () => {
  return (
    <Link to="/" style={{ display: "block", marginBottom: "80px" }}>
      <svg width="106" height="24">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </Link>
  );
};
