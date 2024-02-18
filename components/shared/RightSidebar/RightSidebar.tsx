import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import RenderTag from "../RenderTag";

const hotQ = [
  {
    _id: 1,
    title: "Question 1",
  },
  {
    _id: 1,
    title: "Question 2",
  },
  {
    _id: 3,
    title: "Question 3",
  },
  {
    _id: 4,
    title: "Question 4",
  },
  {
    _id: 5,
    title: "Question 5",
  },
];

const tags = [
  {
    _id: 1,
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: 2,
    name: "python",
    totalQuestions: 5,
  },
  {
    _id: 3,
    name: "react",
    totalQuestions: 5,
  },
  {
    _id: 4,
    name: "node",
    totalQuestions: 5,
  },
  {
    _id: 6,
    name: "AngularJS",
    totalQuestions: 5,
  },
  {
    _id: 7,
    name: "NextJs",
    totalQuestions: 5,
  },
];
const RightSidebar = () => {
  return (
    <section
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col 
        overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div className="">
        <h1 className="h3-bold text-dark200_light900">Top Questions</h1>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQ.map((Question, _i) => (
            <Link
              href={`/questions/${Question._id}`}
              key={Question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {Question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="h3-bold text-dark200_light900">Populer Tags</h1>
        <div className="flex flex-col mt-7 gap-4">
          {tags.map((tag) => (
            <RenderTag 
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            totalQuestions={tag.totalQuestions}
            showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
