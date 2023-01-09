import Head from "next/head";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Home1 from "./Home";


export default function Home() {
  return (
    <>
      <Head>
        <title>Zotech Solution</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.jpg" />
      </Head>
      <Home1 />
    </>
  );
}
