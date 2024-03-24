
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
import Meta from '@/components/Meta/Meta';

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
        <Meta/>
        <link rel="canonical" href="https://вебериум.рф" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
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
