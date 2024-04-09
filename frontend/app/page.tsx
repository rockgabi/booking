import RecentSearches from "@/components/recent-search";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-16 max-w-[1174px]">
      <Section heading="Your recent searches" className="mb-12">
        <RecentSearches /> 
      </Section>
    </main>
  );
}
