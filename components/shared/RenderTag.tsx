import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  _id: Number;
  name: String;
  totalQuestions?: Number;
  showCount?: Boolean;
};

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions?.toString()}</p>
      )}
    </Link>
  );
};

export default RenderTag;
