import type { NextPage } from "next";
import Head from "next/head";
import ReferencesSideBar from "../../Components/ReferencesSideBar";
import CustomizePage from "../../pages-data/customize";

const Customize: NextPage = () => {
  const test = [
    { name: "Install sass compiler", url: "#installsasscompiler" },
    { name: "Add value", url: "#addvalue" },
    { name: "Modify value", url: "#modifyvalue" },
    { name: "Advanced", url: "#advanced" },
  ];
  return (
    <div className="w-100-100 page px-1 md:px-0 overflowY-auto scroll-smooth ">
      <Head>
        <title>Customize - AkramCSS</title>
        <meta
          name="description"
          content="AkramCSS provides you with a lot of options to customize your website. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="container" className="display-flex flex-row  ">
        <div className="md:px-2 max-w-100-100 pb-4">
          <p className="text-4xl font-bold ls-tighter">Customize</p>
          <p className="text-lg lh-normal text-inner font-medium opacity-80">
            In this chapter we will discuss how to customize AkramCSS.
            <br />
            <p>Customization has two parts:</p>
            <ul>
              <li className="font-semibold text-md text-akram">
                How to Add a value , ex : (add new color)
              </li>
              <li className="font-semibold text-md text-sissa">
                How to modify a value , ex : (change senary color value)
              </li>
            </ul>
            you have to keep in mind that you can only customize :
            <ul>
              <li className="font-semibold text-md ">Colors</li>
              <li className="font-semibold text-md ">Text sizes</li>
              <li className="font-semibold text-md ">Font weights</li>
              <li className="font-semibold text-md ">Letter spacings</li>
              <li className="font-semibold text-md ">Line heights</li>
              <li className="font-semibold text-md ">Transition durations</li>
              <li className="font-semibold text-md ">Transition delays</li>
              <li className="font-semibold text-md ">Blurs</li>
              <li className="font-semibold text-md ">
                Rounded values (border radius)
              </li>
            </ul>
          </p>
          <CustomizePage />
        </div>
        <ReferencesSideBar items={test} />
      </div>
    </div>
  );
};

export default Customize;
