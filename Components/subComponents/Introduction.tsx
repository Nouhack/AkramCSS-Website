import React from "react";

type Props = {
  title: string;
  description: string;
  id?: string;
};

export default function Introduction({ title, description, id }: Props) {
  return (
    <div id={id}>
      <p className="text-2xl font-semibold ls-tighter">{title}</p>

      <p className="text-md lh-normal font-medium text-inner opacity-80 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
