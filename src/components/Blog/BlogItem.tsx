import { FC } from "react";
import Card from "../Card";
import { getDateTime } from "../../utils/dataUtils";
import { BlogType } from "../../types/blog";

export type BlogProps = BlogType;

export const Blog: FC<BlogProps> = ({ title, content, createdAt }) => {
  return (
    <Card>
      <h2>{title}</h2>
      <p>{content}</p>
      <span className="hint">Created {getDateTime(new Date(createdAt))}</span>
    </Card>
  );
};
