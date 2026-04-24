import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { AnnouncementTicker } from "@/components/home/AnnouncementTicker";
import { FreeShippingBar } from "@/components/home/FreeShippingBar";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Hero } from "@/components/home/Hero";
import { PressStrip } from "@/components/home/PressStrip";
import { ShopByOccasion } from "@/components/home/ShopByOccasion";
import { TinOfTheMonth } from "@/components/home/TinOfTheMonth";
import { FindYourPeanut } from "@/components/home/FindYourPeanut";
import { GiftSetsFeature } from "@/components/home/GiftSetsFeature";
import { VarietySixClub } from "@/components/home/VarietySixClub";
import { OurStory } from "@/components/home/OurStory";
import { MeetTheFamily } from "@/components/home/MeetTheFamily";
import { HowItsMade } from "@/components/home/HowItsMade";
import { PairingsAndRecipes } from "@/components/home/PairingsAndRecipes";
import { FAQPreview } from "@/components/home/FAQPreview";
import { Trending } from "@/components/home/Trending";
import { SeeTheRoastery } from "@/components/home/SeeTheRoastery";
import { Reviews } from "@/components/home/Reviews";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { AttributeMarquee } from "@/components/home/AttributeMarquee";
import { CorporateGifting } from "@/components/home/CorporateGifting";
import { CountryStore } from "@/components/home/CountryStore";
import { SeasonalUrgency } from "@/components/home/SeasonalUrgency";
import { Newsletter } from "@/components/home/Newsletter";
import { SiteFooter } from "@/components/home/SiteFooter";
import { GiftConcierge } from "@/components/home/GiftConcierge";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wakefield Peanut Company — Virginia's Finest Since 1945" },
      {
        name: "description",
        content:
          "Hand-sorted, small-batch Virginia peanuts from Wakefield, VA. Four generations of family tradition. Gift sets, gourmet tins, and Southern classics shipped nationwide.",
      },
      { property: "og:title", content: "Wakefield Peanut Company — Virginia's Finest Since 1945" },
      {
        property: "og:description",
        content:
          "Family-owned, hand-packed Virginia peanuts and gift boxes. The South's original peanut, since 1945.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollProgress />
      <AnnouncementTicker />
      <FreeShippingBar />
      <SiteHeader />
      <main>
        <Hero />
        <PressStrip />
        <ShopByOccasion />
        <TinOfTheMonth />
        <FindYourPeanut />
        <GiftSetsFeature />
        <VarietySixClub />
        <OurStory />
        <MeetTheFamily />
        <HowItsMade />
        <PairingsAndRecipes />
        <FAQPreview />
        <Trending />
        <SeeTheRoastery />
        <Reviews />
        <InstagramGrid />
        <AttributeMarquee />
        <CorporateGifting />
        <CountryStore />
        <SeasonalUrgency />
        <Newsletter />
      </main>
      <SiteFooter />
      <GiftConcierge />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
