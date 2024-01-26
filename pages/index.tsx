
import Header from '@/components/Header';
import Main from '@/components/sections/Main';
import Case from '@/components/sections/Case'
import Footer from '@/components/sections/Footer';

import mont from '@/font/mont';
import Excellence from '@/components/sections/Excellence';
import Team from '@/components/sections/Team';
import BurgerModal from '@/components/BurgerModal';
import { useState } from 'react';

import Head from 'next/head';

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <>
      <Head>
        <title>Вебериум | Студия вёрстки</title>
        <meta 
          name="description" 
          content="Студия вёрстки ваших проектов. Разрабатываем сайты, работаем с дизайнерами и совместно приходим к идеалу." 
        />
        <meta name="theme-color" content="#000"/>
        <meta name="keywords" content="вебериум, студия, вёрстка, студия вёрстки, дизайн, студия дизайна, сверстать сайт, заказать сайт, сайт, купить сайт, разработка сайта, сколько стоит сайт" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="@summary_large_image" />
        <meta name="twitter:title" content="Вебериум | Студия вёрстки" />
        <meta name="twitter:image" content="https://вебериум.рф/ogimage.png" />
        <meta property="og:title" content="Вебериум | Студия вёрстки" />
        <meta property="og:image:width" content="968" />
        <meta property="og:image:height" content="544" />
        <meta property="og:description" content="Студия вёрстки ваших проектов. Разрабатываем сайты, работаем с дизайнерами и совместно приходим к идеалу." />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover"></meta>
        <meta property="og:image" content="https://вебериум.рф/ogimage.png" />
        <meta property="og:url" content="https://вебериум.рф"></meta>
        <link rel="canonical" href="https://вебериум.рф" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      </Head>
      <main
        className={`${mont.className}`}
      >
        <BurgerModal active={activeMenu} setActive={setActiveMenu}/>
        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Main />
        <Case />
        <Excellence />
        <Team />
        <Footer/>
      </main>
    </>
  );
}
