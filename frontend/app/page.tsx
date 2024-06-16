import { BrowseByType } from "@/components/browse-by-type";
import Explore from "@/components/explore";
import GeniusRewards from "@/components/genius-rewards";
import Offers from "@/components/offers";
import RecentSearches from "@/components/recent-search";
import Section from "@/components/section";
import TopUniqueProperties from "@/components/top-unique-properties";
import TrendingDestinations from "@/components/trending-destinations";
import TripPlanner from "@/components/trip-planner";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center p-16 max-w-[1174px]">
      <Section heading="Your recent searches">
        <RecentSearches /> 
      </Section>

      <Section heading="Offers" subheading="Promotions, deals and special offers for you">
        <Offers />
      </Section>

      <Section heading="Browse by type" subheading="Find the perfect place for your trip">
        <BrowseByType />
      </Section>

      <Section heading="Trending destinations" subheading="Travelers searching for Japan also booked these">
        <TrendingDestinations />
      </Section>

      <Section heading="Explore Argentina" subheading="These popular destinations have a lot to offer">
        <Explore />
      </Section>

      <Section heading="Quick and easy trip planner" subheading="Pick a vibe and explore the top destinations in Brazil">
        <TripPlanner />
      </Section>

      <Section heading="Travel more, spend less">
        <GeniusRewards />
      </Section>

      <Section heading="Stay at our top unique properties" subheading="From castles and villas to boats and igloos, we have it all">
        <TopUniqueProperties />
      </Section>
    </main>
  );
}
