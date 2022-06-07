import type { NextPage } from "next";
import Head from "next/head";
import Introduction from "../../Components/subComponents/Introduction";
const Home: NextPage = () => {
  return (
    <div className="w-100-100 page px-5 overflowY-auto">
      <Head>
        <title>Introduction - AkramCSS</title>
        <meta
          name="description"
          content="
        AkramCSS is a collection of CSS utilities that are useful for web development.
        "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <p className="text-4xl font-bold ls-tighter">
          Get started with Akram CSS
        </p>
        <p className="text-md lh-normal text-inner opacity-80 font-medium">
          AkramCSS is a utility Css Library that aims to reduce the touch of css
          , that&apos;s the meaning of LCT (less css touch) file , the Library
          has been built using only css generated from sass where you can find
          all css power and more customised classes.
        </p>

        <Introduction
          title="Future css"
          description="

          In production mode , your generated css will be minified and
          compressed and the unused css will be deleted and also your css code
          gonna be readable for all browsers thank to postCSS.
        "
        />

        <Introduction
          title="Good developement Experience"
          description="By using AkramCSS you can get a good developement experience with less
          css , because the size of the entire akramcss.min.css file is less
          than 800 kb."
        />

        <Introduction
          title="Add your own css easly"
          description="

          You can add your own css and in the final css build your code will be
          combined and minidied , compressed , deleting unused css also .
          "
        />
      </div>
    </div>
  );
};

export default Home;
