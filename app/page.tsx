"use client";
import SwiperComponent from "./_components/SwiperComponent";
import Wrapper from "./_components/Wrapper";


export default function Home() {
  return (
    <main className="bg-cocoa-10">
      <div>
        <SwiperComponent />
      </div>

      <div>
        <Wrapper
          title="About"
          subtitle="私たちについて"
          wrapperImg="/images/alex-lvrs-aX_ljOOyWJY-unsplash.jpg"
          link="/About"
          bgColor="bg-white"
        />
        <Wrapper
          title="Product"
          subtitle="商品紹介"
          wrapperImg="/images/aliona-gumeniuk-YJ7dFJTHEjI-unsplash.jpg"
          link="/Product"
          description="華やかな香りと上品な味わいが口いっぱいに広がる、当店自慢のフルーツタルト。<br />
          じっくりと焼き上げた酵母生地となめらかなクリームの絶妙な調和をお楽しみください。<br />
          一口ごとに広がる幸せな味わいは、特別な日のデザートにぴったりです。"
          bgColor="bg-cocoa-10"
        />
        <Wrapper
          title="Access"
          subtitle="アクセス"
          wrapperImg="/images/olena-bohovyk-dmGOOXS6Rbs-unsplash.jpg"
          link="/Access"
          bgColor="bg-white"
        />
      </div>


    </main>
  );
}
