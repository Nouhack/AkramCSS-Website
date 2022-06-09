import Head from "next/head";
import ThemingPage from "../../pages-data/theming";
type Props = {};

export default function Theming({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto">
      <Head>
        <title>Theming - AkramCSS</title>
        <meta
          name="description"
          content="to use theming with AkramCSS it's very simple by default the theme will be the same as your browser theme but if you wanna change is manually you just need to add dark-mode class name or light-mode class name to the element you want to change the theme"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <p className="text-4xl font-bold ls-tighter">Theming</p>
        <ThemingPage />
        <div className="bg-senary p-1 my-2">
          <p className="text-md lh-normal font-medium text-inner opacity-80">
            The idea is to add the class name to the element you want to change
            and if you want the browser theme add an empty string.
          </p>
        </div>
      </div>
    </div>
  );
}
