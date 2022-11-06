import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";

import "@/styles/globals.css";

// Required to use these fonts with TailwindCSS
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
