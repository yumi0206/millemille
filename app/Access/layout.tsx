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
      title="Access"
      sub="aaaa"
      bgimg="/images/first.jpg"
      />

{children}
      </>
  );
}
