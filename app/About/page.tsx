import Image from "next/image";

const About = () => {
  return (
    <div className=" w-full my-8 py-16">
      <section className="mx-auto mb-16 text-base sm:leading-10 w-full sm:w-[calc(100%-10rem)] md:flex">
        <div className="w-full pb-8 md:w-1/3 text-center md:text-left px-4 sm:px-0">
          <p className="text-2xl font-bold">ABOUT US</p>
          <p className="text-sm">パティスリーミルミルについて</p>
        </div>
        <div className="w-full text-sm text-center md:text-left sm:text-base md:w-2/3 px-4 md:px-0">
          2005年にオープンしたパティスリーミルミルは、
          <br />
          今年で19周年を迎えることができました。
          <br />
          お客様からかわいがっていただき、しっかりと この土地に根をはり、 <br />
          町の皆さまと一緒に成長していきます。 <br />
          ミルミルのコンセプトは 「町のケーキ屋さん」です。 <br />{" "}
        </div>
      </section>

      <section className="mx-auto mb-16 text-base sm:leading-10 w-full sm:w-[calc(100%-10rem)] md:flex">
        <div className="w-full pb-8 md:w-1/3 text-center md:text-left px-4 sm:px-0">
          <p className="text-2xl font-bold">LOGO</p>
          <p className="text-sm">ロゴについて</p>
        </div>
        <div className="w-full text-sm text-center md:text-left sm:text-base md:w-2/3 px-4 md:px-0">
          <div className="relative w-full h-[200px] mb-8">
            <Image
              className="object-cover"
              src="/images/dim-hou-bfFX9KZJvhQ-unsplash.jpg"
              layout="fill"
              alt="logo"
            />
          </div>
          <p>
            オープンはじめからずっと共に過ごしているロゴ。
            <br />
            ふたりのパティシエがイメージキャラクターとなり、 <br />
            ひとつひとつのお菓子を丁寧につくり、
            <br />
            食べていただいたお客様に楽しんでいただきたいという
            <br />
            わたしたちの想いが表現されています。 <br />
            <br />{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
