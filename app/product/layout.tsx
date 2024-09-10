import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "Product",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero
      title="Product"
      sub="商品紹介"
      bgimg="/images/brooke-lark-V4MBq8kue3U-unsplash.jpg"
      />

{children}
      </>
  );
}
