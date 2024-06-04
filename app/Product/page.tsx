import Image from "next/image";

const Product = () => {
  return (
    <div>
      <div className="w-full my-8 py-16">
        <section className="mx-auto mb-16 text-base sm:leading-10 w-full sm:w-[calc(100%-10rem)] md:flex">
          <div className="w-full pb-8 md:w-1/3 text-center md:text-left px-4 sm:px-0">
            <p className="text-2xl font-bold">PETIT GATEAU</p>
            <p className="text-sm">オーダーケーキ</p>
          </div>
          <div className="w-full text-sm sm:text-base md:w-2/3 px-4 md:px-0">
            <div className="relative w-full h-[200px] mb-8">
              <Image
                className="object-cover"
                src="/images/kelsey-curtis-CSN56aQ1NRE-unsplash.jpg"
                layout="fill"
                alt="logo"
              />
            </div>
            <p>
              特別な日にはオーダーケーキをおすすめします。
              <br />
              ふたりのパティシエがイメージキャラクターとなり、ひとつひとつのお菓子を丁寧につくり、
              <br />
              食べていただいたお客様に楽しんでいただきたいという
              <br />
              わたしたちの想いが表現されています。 <br />
              <br />{" "}
            </p>
          </div>
        </section>

        <section className="mx-auto mb-16 text-base sm:leading-10 w-full sm:w-[calc(100%-10rem)] md:flex">
          <div className="w-full pb-8 md:w-1/3 text-center md:text-left px-4 sm:px-0">
            <p className="text-2xl font-bold">DECORATION CAKE</p>
            <p className="text-sm">デコレーションケーキ</p>
          </div>
          <div className="w-full text-sm sm:text-base md:w-2/3 px-4 md:px-0">
            <div className="relative w-full h-[200px] mb-8">
              <Image
                className="object-cover"
                src="/images/sonia-vergerolle-1kRE68G1tRM-unsplash.jpg"
                layout="fill"
                alt="logo"
              />
            </div>
            <div className="relative w-full h-[200px] mb-8">
              <Image
                className="object-cover"
                src="/images/dim-hou-bfFX9KZJvhQ-unsplash.jpg"
                layout="fill"
                alt="logo"
              />
            </div>
            <p>
              特別な日にはオーダーケーキをおすすめします。
              <br />
              ふたりのパティシエがイメージキャラクターとなり、ひとつひとつのお菓子を丁寧につくり、
              <br />
              食べていただいたお客様に楽しんでいただきたいという
              <br />
              わたしたちの想いが表現されています。 <br />
              <br />{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Product;
