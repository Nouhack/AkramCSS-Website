import React from "react";
import Link from "next/link";
import { RiArrowDownCircleFill } from "react-icons/ri";
import { SiStartrek } from "react-icons/si";
import { RiSettings2Fill } from "react-icons/ri";
import { FaThemeisle } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoMdBuild } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { FaCss3Alt } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
type Props = {};

export default function SideBar({}: Props) {
  const [activeName, setActiveName] = React.useState("");
  const test = [
    {
      section: "Getting Started",
      items: [
        {
          name: "Introduction",
          url: "/doc/",
        },
        {
          name: "Installation",
          url: "/doc/installation",
        },
        {
          name: "Production",
          url: "/doc/production",
        },
      ],
    },
    {
      section: "Core",
      items: [
        {
          name: "Theming",
          url: "/doc/theming",
        },
        {
          name: "Responsive",
          url: "/doc/responsive",
        },
        {
          name: "Pseudo-Classes",
          url: "/doc/pseudo-classes",
        },
        {
          name: "Customize",
          url: "/doc/customize",
        },
      ],
    },
    {
      section: "Utility Classes",
      items: [
        {
          name: "Layout",
          url: "/doc/layout",
        },
        {
          name: "Flex - Grid",
          url: "/doc/flex-grid",
        },
        {
          name: "Sizes",
          url: "/doc/sizes",
        },
        {
          name: "Typography",
          url: "/doc/typography",
        },
        {
          name: "Spacing",
          url: "/doc/spacing",
        },
        {
          name: "Borders",
          url: " /doc/borders",
        },
        {
          name: "Backgrounds",
          url: "/doc/backgrounds",
        },
        {
          name: "Effects",
          url: "/doc/effects",
        },
        {
          name: "Filters",
          url: "/doc/filters",
        },
        {
          name: "Transforms",
          url: "/doc/transforms",
        },
        {
          name: "Transitions",
          url: "/doc/transitions",
        },
        {
          name: "Animations",
          url: "/doc/animations",
        },
        {
          name: "Others",
          url: "/doc/others",
        },
      ],
    },
  ];
  return (
    <div className="bg-base min-w-16  max-h-full overflow-auto ">
      <div className="mt-6">
        {test.map((item, index) => {
          return (
            <div key={index} className="my-2  px-2">
              <p className="font-bold text-inner ">{item.section}</p>
              {item.items.map((item2, index2) => {
                return (
                  <div key={index2} className="my-1.5 display-flex gap-1 pl-1">
                    {item2.name === "Introduction" && (
                      <SiStartrek size={20} className="text-maria" />
                    )}
                    {item2.name === "Installation" && (
                      <RiArrowDownCircleFill size={20} className="text-sissa" />
                    )}
                    {item2.name === "Production" && (
                      <IoMdBuild size={20} className="text-akram" />
                    )}
                    {item2.name === "Theming" && (
                      <FaThemeisle size={20} className="text-senary" />
                    )}
                    {item2.name === "Customize" && (
                      <MdDashboardCustomize size={20} className="text-sissa" />
                    )}
                    {item2.name === "Responsive" && (
                      <CgScreen size={20} className="text-akram" />
                    )}
                    {item2.name === "Pseudo-Classes" && (
                      <FaCss3Alt size={20} className="text-maria" />
                    )}
                    {item2.name !== "Introduction" &&
                      item2.name !== "Installation" &&
                      item2.name !== "Production" &&
                      item2.name !== "Theming" &&
                      item2.name !== "Customize" &&
                      item2.name !== "Responsive" &&
                      item2.name !== "Pseudo-Classes" && (
                        <RiArrowRightSFill size={20} className="text-akram" />
                      )}
                    <Link href={item2.url}>
                      <a
                        className={`text-none text-sm text-${
                          activeName === item2.name ? "akram" : "inner"
                        } font-semibold`}
                        onClick={() => setActiveName(item2.name)}
                      >
                        {item2.name}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
