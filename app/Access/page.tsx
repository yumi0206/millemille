import { Button } from "@/components/ui/button";
import { Bus, Car } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="container mt-12 mb-28 mx-auto flex flex-col items-center gap-4"
      id="access"
    >
      <h1 className="text-4xl font-bold mt-4">Patisserie mille.mille</h1>
      <p className="">パティスリー　ミル.ミル</p>
      <div>
        <p className="m-2 text-left">
          〒085-0058 北海道釧路市愛国東３丁目１−１２
        </p>
        <p className="m-2 text-left">TEL：XXX-XXX-XXXX</p>
      </div>

      <div className="my-12">
        <div className="flex items-center gap-2 border-t-1 py-6">
          <Car className="w-6 h-6 " />
          <p className="pr-6 font-bold">お車でお越しの方</p>
          <p className="text-sm">専用駐車場をご利用ください</p>
        </div>
        <div className="flex items-center gap-2 border-y-1 py-6">
          <Bus className="w-6 h-6 font-light" />
          <p className="pr-6 font-bold">バスでお越しの方</p>
          <p className="text-sm">
            くしろバス (77)イオン昭和線 中園通より徒歩2分
          </p>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11670.450480202038!2d144.3889753!3d43.0074909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f72163416c1b3e1%3A0x3d8a52432e9febf6!2z44OR44OG44Kj44K544Oq44O844Of44Or44Of44Or!5e0!3m2!1sja!2sjp!4v1717471624037!5m2!1sja!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full max-w-4xl"
      />
      <Button variant="secondary" asChild className="w-fit rounded-none mb-6">
        <Link href="https://maps.app.goo.gl/3bfJ1UxLpCoq8E7Q6">
          Googlemapで見る
        </Link>
      </Button>

      <section className="max-w-4xl mb-16 text-base sm:leading-10 w-full sm:w-[calc(100%-10rem)] md:flex">
        <div className="w-full pb-8 md:w-1/3 text-center md:text-left px-4 sm:px-0">
          <p className="font-semibold">お車でお越しのお客様へ</p>
          <p className="text-2xl font-semibold">駐車場のご案内</p>
        </div>
        <div className="w-full text-sm sm:text-base md:w-2/3 px-4 md:px-0">
          店舗周辺は、道幅の狭い住宅地です。
          <br />
          路上駐車は、近隣の方の迷惑となりますので、お断りしております。
          <br />
          皆様の、ご理解とご協力をお願い申し上げます。 <br />{" "}
        </div>
      </section>
    </div>
  );
};
export default page;
