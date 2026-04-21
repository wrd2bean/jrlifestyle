import bornToWin from "@/assets/tee-born-to-win.jpeg";
import getRich from "@/assets/tee-get-rich.jpeg";
import noLuck from "@/assets/tee-no-luck.jpeg";
import joker from "@/assets/tee-joker.jpeg";
import jrRed from "@/assets/tee-jr-red.jpeg";
import jrWhite from "@/assets/tee-jr-white.jpeg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  backImage: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "born-to-win-tee",
    name: "Born To Win Tee",
    tagline: "Royal flush back hit. JR cards on the chest.",
    price: 40,
    image: bornToWin,
    backImage: joker,
    badge: "Flagship",
  },
  {
    slug: "get-rich-or-die-trying-tee",
    name: "Get Rich Or Die Trying Tee",
    tagline: "Smeared red ink back. JR dice chest hit.",
    price: 40,
    image: getRich,
    backImage: jrRed,
    badge: "New",
  },
  {
    slug: "no-luck-all-god-tee",
    name: "No Luck All God Tee",
    tagline: "Three sevens back. Lucky 7 chest hit.",
    price: 40,
    image: noLuck,
    backImage: jrWhite,
  },
];