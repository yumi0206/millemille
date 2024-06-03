import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "News",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero
      title="News"
      sub="お知らせ"
      bgimg="/images/kelsey-curtis-CSN56aQ1NRE-unsplash.jpg"
      />

{children}
      </>
  );
}
