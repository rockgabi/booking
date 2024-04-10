import { BrowseByType } from "@/components/browse-by-type";
import Offers from "@/components/offers";
import RecentSearches from "@/components/recent-search";
import Section from "@/components/section";
import TrendingDestinations from "@/components/trending-destinations";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center p-16 max-w-[1174px]">
      <Section heading="Your recent searches" className="mb-12 w-full">
        <RecentSearches /> 
      </Section>

      <Section heading="Offers" subheading="Promotions, deals and special offers for you" className="mb-12 w-full">
        <Offers />
      </Section>

      <Section heading="Browse by type" subheading="Find the perfect place for your trip" className="mb-12 w-full">
        <BrowseByType />
      </Section>

      <Section heading="Trending destinations" subheading="Travelers searching for Japan also booked these" className="mb-12 w-full">
        <TrendingDestinations />
      </Section>
    </main>
  );
}
