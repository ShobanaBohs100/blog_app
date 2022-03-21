import { FC } from "react";
import "./Card.css";

const Card: FC = function ({ children }) {
  return <div className="card">{children}</div>;
};

export default Card;
