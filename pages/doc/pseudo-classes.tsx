import Head from "next/head";
import PseudoclassPage from "../../pages-data/pseudo-class";
type Props = {};

export default function Pseudoclasses({}: Props) {
  return (
    <div className="w-100-100 page px-1 md:px-5 overflowY-auto">
      <Head>
        <title>Pseudo classes - AkramCSS</title>
        <meta
          name="description"
          content="AkramCSS provides one pseudo class wich is hover , it's used to add a hover effect to any element , but we will add more in the future"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-2">
        <p className="text-4xl font-bold ls-tighter">Pseudo classes</p>
        <PseudoclassPage />
      </div>
    </div>
  );
}
