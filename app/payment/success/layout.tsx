import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "Order Confirmation",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero
        title="Order Confirmation"
        sub="ご注文確認"
        bgimg="/images/cake-success.jpg" // You might want to use a different image for the success page
      />

      {children}
    </>
  );
}