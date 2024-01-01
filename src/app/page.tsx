import {
  Company,
  Hero,
  OurFeatures,
  ResearchingBusiness,
  YouGetting,
} from "@/components";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <OurFeatures />
      <YouGetting />
      <ResearchingBusiness />
      <Company />
    </>
  );
}
