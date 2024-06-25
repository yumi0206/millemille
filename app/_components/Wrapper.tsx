import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  wrapperImg: string;
  link: string;
  bgColor: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Wrapper({
  title,
  subtitle,
  wrapperImg,
  link,
  bgColor,
  description,
}: Props) {
  return (
    <section className={`py-12 ${bgColor}`}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
        <p className="flex items-center justify-center gap-5 mb-10">
          {subtitle}
        </p>
      </div>

      <div>
        <Image
          className="h-[300px] w-full object-cover"
          src={wrapperImg}
          alt=""
          width={1920}
          height={1080}
        />
      </div>

      <div className="container flex flex-col items-center justify-center h-full mt-10 max-w-2xl">
        <p
          className="text-center text-base leading-7 "
          dangerouslySetInnerHTML={{ __html: description || "" }}
        ></p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button className="font-semibold bg-transparent border-cocoa border-0.5 px-20 py-5 ">
          <Link href={link}>{title}ページへ </Link>
        </Button>
      </div>
    </section>
  );
}
