import Hero from "@/app/_components/Hero";


export const metadata = {
  title: "News",
};

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <>
{children}
      </>
  );
}
