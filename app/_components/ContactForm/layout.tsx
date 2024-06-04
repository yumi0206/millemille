import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "Access",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero
      title="Contact"
      sub="お問合せ"
      bgimg="/images/first.jpg"
      />

{children}
      </>
  );
}
