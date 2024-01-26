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
        duration: 600, 
        easing: "ease-out-cubic",
        once: true
      })
  }, [])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>
    </AnimatePresence>
  );
}
