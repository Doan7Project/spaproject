import "../styles/globals.css";
import type { AppProps } from "next/app";
import HeaderConponent from "./src/components/header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeaderConponent/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
