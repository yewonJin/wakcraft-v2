import { Fragment } from "react";

import { medium } from "@/app/layout";

type Props = {
  title: string;
  content: string;
};

export default function PageTitle(props: Props) {
  const { title, content } = props;

  return (
    <Fragment>
      <h1 className={`text-3xl text-text-primary ${medium.className}`}>
        {title}
      </h1>
      <p className="mt-4 text-base text-text-secondary">{content}</p>
    </Fragment>
  );
}
