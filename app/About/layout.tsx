import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "About",
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero
      title="About"
      sub="aaaa"
      bgimg="/images/diana-light-kKJl2xRikQM-unsplash.jpg"
      />

{children}
      </>
  );
}
