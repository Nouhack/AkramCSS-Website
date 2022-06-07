import React from "react";
import Link from "next/link";
import { FcRight } from "react-icons/fc";
import { AiOutlineRight } from "react-icons/ai";

type Props = {
  items: Array<any>;
};

export default function ReferencesSideBar({ items }: Props) {
  const [activeName, setActiveName] = React.useState("");
  return (
    <div className="md:min-w-16 display-flex flex-column display-none xl:display-flex ">
      <div className="page overflowY-auto  position-fixed w-16 ">
        <p className="font-bold">Quick reference</p>
        {items.map((item, index) => (
          <div
            key={index}
            className="pl-1 my-1.5 display-flex alignI-center gap-0.5 flex-row"
          >
            <AiOutlineRight className="text-akram" size={12} />
            <Link href={item.url}>
              <a
                className={`text-none mb-0.1 text-sm ${
                  item.name === activeName ? "text-akram" : "text-inner"
                } font-semibold`}
                onClick={() => setActiveName(item.name)}
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
