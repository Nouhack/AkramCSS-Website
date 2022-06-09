import type { NextPage } from "next";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import InstallationPage from "../../pages-data/installations";
const Installation: NextPage = () => {
  const test = [
    { name: "FROM CDN", url: "#fromcdn" },
    { name: "Installation", url: "#installation" },
    { name: "Import AkramCSS.min.css", url: "#importakramcss" },
    { name: "Congratulations now can use AkramCSS", url: "#congratulation" },
  ];
  return (
    <div className="w-100-100 page px-0 overflowY-auto scroll-smooth">
      <Head>
        <title>Installation - AkramCSS</title>
        <meta
          name="description"
          content="
         AkramCSS installation guide , how to install AkramCSS , how to use AkramCSS , how to import AkramCSS. 
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="container" className="display-flex flex-row px-1 md:px-2 ">
        <div className="w-100-100 pb-3 md:px-1">
          <p className="text-4xl font-bold ls-tighter">Installation</p>
          <p className="text-lg lh-normal text-inner font-medium opacity-80">
            We assume you have already installed nodejs and npm , if you
            haven&apos;t installed it yet please do it before you continue.
          </p>
          <InstallationPage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
};

export default Installation;
