import Hero from "@/app/_components/Hero";

export const metadata = {
  title: "決済キャンセル",
};

type Props = {
  children: React.ReactNode;
};

export default function CancelLayout({ children }: Props) {
  return (
    <>
      <Hero
        title="Cancel"
        sub="決済キャンセル"
        bgimg="/images/cancel-bg.jpg"
      />
      {children}
    </>
  );
}