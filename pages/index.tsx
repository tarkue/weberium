
import Header from '@/components/Header';
import Main from '@/components/sections/Main';
import Case from '@/components/sections/Case'
import Footer from '@/components/sections/Footer';

import mont from '@/font/mont';
import Excellence from '@/components/sections/Excellence';
import Team from '@/components/sections/Team';
import BurgerModal from '@/components/BurgerModal';
import { useState } from 'react';



export default function Home() {
  const [activeMenu, setActiveMenu] = useState(false)

  return (
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
  );
}
