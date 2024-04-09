import Offers from "@/components/offers";
import RecentSearches from "@/components/recent-search";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center p-16 max-w-[1174px]">
      <Section heading="Your recent searches" className="mb-12 w-full">
        <RecentSearches /> 
      </Section>

      <Section heading="Offers" subheading="Promotions, deals and special offers for you" className="mb-12 w-full">
        <Offers />
      </Section>
    </main>
  );
}
