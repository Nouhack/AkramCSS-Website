import React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="w-full h-full gradient-to-right from-base to-akram display-flex alignI-center justifyC-center flex-column">
      <Head>
        <title>AkramCSS</title>
        <meta
          name="description"
          content="AkramCSS is a utility css library that gives you a variety of classes that helps you to speed up your developement workflow and LCT (less css touch) .."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-4xl md:text-6xl lh-none font-bold text-base max-w-70-100 text-center ls-tighter">
        Build your website faster and less frustrating with less css touch.
      </p>
      <Link href="/doc">
        <button className="cursor-pointer bg-akram text-base hover:bg-senary hover:text-base font-bold text-inner p-1.5 transition-color ease duration-slow rounded-lg">
          Getting started{" "}
        </button>
      </Link>
    </div>
  );
}
