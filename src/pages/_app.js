import "@/styles/styles.css";
import "@/styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
