import Image from "next/image";

type Props = {
  title: string;
  sub: string;
  bgimg: string;
  children?: React.ReactNode;
};

export default function Hero({ title, sub, bgimg }: Props) {
  return (
    <section className="relative h-[300px] overflow-hidden">
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        src={bgimg}
        alt=""
        width={1920}
        height={1000}
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white text-center mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="flex items-center justify-center gap-5 mb-10 text-white drop-shadow-lg">
          <span className="h-0.5 w-5 bg-white"></span>
          {sub}
          <span className="h-0.5 w-5 bg-white"></span>
        </p>
      </div>
    </section>
  );
}
