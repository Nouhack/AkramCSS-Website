import "../styles/globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import type { AppProps } from "next/app";
import SideBar from "../Components/SideBar";
import { FaGithubAlt } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiFirefoxbrowser } from "react-icons/si";
import { useRouter } from "next/router";
import Link from "next/link";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Search from "../Components/search";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const progress = new ProgressBar({
  size: 2,
  color: "#0688ac",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const [theme, setTheme] = useState("auto");
  const [openSerch, setOpenSerch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showChild, setShowChild] = useState(false);
  const [showSideBarMobile, setshowSideBarMobile] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <div
        className={`font-sans ls-tight text-inner bg-base ${
          theme === "light" ? "light-mode" : theme === "dark" ? "dark-mode" : ""
        } `}
      >
        {asPath !== "" && (
          <div
            className={`w-100-100 position-fixed h-4 px-3 z display-flex bg-${
              asPath !== "/" ? "base" : ""
            } alignI-center justifyC-between  ${
              asPath !== "/"
                ? " border-double border-r-0 border-l-0 border-t-0 border-b-1 border-b-akram z-100"
                : ""
            }`}
          >
            <Link href="/">
              <Image
                className="cursor-pointer"
                src="/logo.svg"
                alt="Picture of the author"
                width={150}
                height={40}
              />
            </Link>
            <div className="display-flex gap-1 md:gap-2  alignI-center">
              {/* search */}

              {asPath !== "/" && (
                <AiOutlineMenuUnfold
                  onClick={() => {
                    setshowSideBarMobile(!showSideBarMobile);
                  }}
                  className={`cursor-pointer display-block md:display-none`}
                  size={25}
                />
              )}
              <Search />
              {theme === "light" ? (
                <MdOutlineLightMode
                  className="cursor-pointer"
                  color={asPath !== "/" ? "" : "white"}
                  size={22}
                  onClick={() => {
                    setTheme("auto");
                  }}
                />
              ) : theme === "dark" ? (
                <MdOutlineDarkMode
                  className="cursor-pointer"
                  color={asPath !== "/" ? "" : "white"}
                  size={22}
                  onClick={() => {
                    setTheme("light");
                  }}
                />
              ) : (
                <SiFirefoxbrowser
                  className="cursor-pointer"
                  size={22}
                  color={asPath !== "/" ? "" : "white"}
                  onClick={() => {
                    setTheme("dark");
                  }}
                />
              )}
              <a
                href="https://github.com/Nouhack/AkramCSS"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <FaGithubAlt
                  color={asPath !== "/" ? "" : "white"}
                  size={25}
                  className="pr-6 text-inner "
                />
              </a>
            </div>
          </div>
        )}

        <div className="display-flex flex-row alignI-end min-h-full">
          <div
            className={`display-${
              showSideBarMobile ? "block" : "none"
            } md:display-block`}
          >
            {asPath !== "/" && <SideBar />}
          </div>

          <Component {...pageProps} />
        </div>
      </div>
    );
  }
}

export default MyApp;
