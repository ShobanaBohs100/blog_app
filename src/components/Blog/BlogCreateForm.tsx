import React, { FC } from "react";
import Card from "../Card";
import Button from "../Button";
import "./Blog.css";
import { BlogForm } from "../../app/slices/Blog.slice";

interface Props {
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  onInputChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  data: BlogForm;
}
export const BlogCreateForm: FC<Props> = (props) => {
  const { data, onInputChange, onSubmit } = props;

  return (
    <section className="blogCreateForm">
      <Card>
        <form>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={data.title}
            onChange={onInputChange}
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={data.content}
            onChange={onInputChange}
            required
          />
          <Button type="submit" onClick={onSubmit}>
            Post
          </Button>
        </form>
      </Card>
    </section>
  );
};
