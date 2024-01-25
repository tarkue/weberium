import "@/styles/globals.css";
import "@/styles/typography.css";
import "@/styles/animation.css";

import 'aos/dist/aos.css';
import AOS from 'aos';

import type { AppProps } from "next/app";
import { ReactLenis } from '@studio-freight/react-lenis'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: "ease-out-cubic", 
      anchorPlacement: "center-top"
    })
  }, [])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ReactLenis options={{
        autoResize: true
      }} root>
        <Component {...pageProps} />
      </ReactLenis>
    </AnimatePresence>
  );
}
