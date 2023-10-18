import SearchBar from "@/components/search/SearchBar";
import HomeIntros from "@/components/home-intros/HomeIntros";

export const metadata = {
  title: "English to Hindi Online Dictionary | अंग्रेज़ी हिन्दी शब्दकोश - MeaningInHindi",
  description: "We're all digging deep into words to help you understand, what they mean in Hindi. We're not just giving you simple definitions – we're like worddetectives, uncovering all the interesting details and translation in Hindi about each word.",
  alternates: {
    canonical: `https://meaninginhindi.wiki`
  }
}

export default function Home() {
  return (
    <>
      <SearchBar place="/search" isSingleWordSearch={false} />
      <HomeIntros />
    </>
  )
}
