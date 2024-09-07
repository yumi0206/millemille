import Hero from "@/app/_components/Hero";

export const metadata = {
  title: "Shop",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Shop" sub="商品一覧" bgimg="/images/first.jpg" />
      {children}
    </>
  );
}
