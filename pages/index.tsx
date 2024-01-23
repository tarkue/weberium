import Main from '@/components/sections/Main';
import Case from '@/components/sections/Case'
import Footer from '@/components/sections/Footer';

import dynamic from 'next/dynamic';
import mont from '@/font/mont';



const Header = dynamic(() => import('@/components/Header'), { 
  loading: () => <p>loading</p>,
})


export default function Home() {
  return (
    <main
      className={`${mont.className}`}
    >
      <Header />
      <Main />
      <Case />
      <Footer/>
    </main>
  );
}
