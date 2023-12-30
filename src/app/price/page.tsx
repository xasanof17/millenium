import { PriceBlock } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Price",
  description: "Price list of Millenium Company",
};

export default function PricePage() {
  return (
    <>
      <section id="price" className="container my-16">
        <PriceBlock />
      </section>
    </>
  );
}
