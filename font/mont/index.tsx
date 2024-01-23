import localFont from "next/font/local";

const mont = localFont({ 
  preload: true,
  src: [
    {
    path: "../../assets/fonts/MontRegular.woff2",
    weight: '400',
    style: 'normal',
    },
    {
    path: "../../assets/fonts/MontSemiBold.woff2",
    weight: '600',
    style: 'normal',
    }
  ],
});

export default mont;
