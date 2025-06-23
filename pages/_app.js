import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="5e6f32efce2ea4bc" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
