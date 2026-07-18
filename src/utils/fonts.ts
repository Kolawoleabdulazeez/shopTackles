import localFont from "next/font/local";
import { Waterfall } from "next/font/google";

export const pangram = localFont({
  src: [
    {
      path: "../../public/fonts/Pangram-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pangram-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pangram",
  display: "swap",
});

export const waterfall = Waterfall({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});