import { Header } from "@/app/components/Header";
import { Quotes } from "./components/Quotes";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-12 w-3/5 mx-auto">
        <Quotes />
      </div>
    </>
  );
}
