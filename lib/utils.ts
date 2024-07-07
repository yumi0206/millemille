import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const homeContents = [
  {
    title: "About",
    subtitle: "私たちについて",
    img: "/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg",
    link: "/about",
    bgColor: "bg-white",
  },
  {
    title: "Product",
    subtitle: "商品紹介",
    img: "/images/aliona-gumeniuk-YJ7dFJTHEjI-unsplash.jpg",
    link: "/product",
    bgColor: "bg-cocoa-10",
    description:
      "華やかな香りと上品な味わいが口いっぱいに広がる、当店自慢のフルーツタルト。じっくりと焼き上げた酵生地となめらかなクリームの絶妙な調和をお楽しみください。一口ごとに広がる幸せな味わいは、特別な日のデザートにぴったりです。",
  },
  {
    title: "Access",
    subtitle: "アクセス",
    img: "/images/olena-bohovyk-dmGOOXS6Rbs-unsplash.jpg",
    link: "/access",
    bgColor: "bg-white",
  },
  {
    title: "Shop",
    subtitle: "店舗受け取り",
    img: "/images/olena-bohovyk-dmGOOXS6Rbs-unsplash.jpg",
    link: "/shop",
    bgColor: "bg-cocoa-10",
  },
];

export const DateTimeOptions = [
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
];

// 月曜日と火曜日を除外する関数
export const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 1 && day !== 2; // 0は日曜日、1は月曜日、2は火曜日
};

// 最小日付を現在から4日後に設定
export const minDate = new Date();
minDate.setDate(minDate.getDate() + 4);
