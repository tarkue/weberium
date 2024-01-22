import Case from '@/components/sections/Case/Case';
import Footer from '@/components/sections/Footer/Footer';
import dynamic from 'next/dynamic';
import localFont from 'next/font/local'

const mont = localFont({ 
  src: [
    {
      path: "../assets/fonts/MontRegular.woff2",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../assets/fonts/MontSemiBold.woff2",
      weight: '600',
      style: 'normal',
    }
  ],
});

const Header = dynamic(() => import('@/components/Header/Header'), { 
  loading: () => <p>loading</p>,
})
const Main = dynamic(() => import('@/components/sections/Main/Main'), { 
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
