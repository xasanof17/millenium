import { CarouselSlider } from "@/components";
import { TypographyH1 } from "@/components/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comments",
  description: "Comments with Millenium Company",
};

export default function CommentsPage() {
  return (
    <>
      <section id="comments" className="container my-3">
        <TypographyH1 className="mb-3">
          Избранное <span className="text-primaryColor">проекты</span>
        </TypographyH1>
        <CarouselSlider />
      </section>
    </>
  );
}
