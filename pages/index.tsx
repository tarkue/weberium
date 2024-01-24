
import Header from '@/components/Header';
import Main from '@/components/sections/Main';
import Case from '@/components/sections/Case'
import Footer from '@/components/sections/Footer';

import mont from '@/font/mont';
import Excellence from '@/components/sections/Excellence';
import Team from '@/components/sections/Team/Team';



export default function Home() {
  return (
    <main
      className={`${mont.className}`}
    >
      <Header />
      <Main />
      <Case />
      <Excellence />
      <Team />
      <Footer/>
    </main>
  );
}
