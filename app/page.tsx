import SearchBar from "@/components/search/SearchBar";
import HomeIntros from "@/components/home-intros/HomeIntros";

export const metadata = {
  title: "meaninginhindi.wiki | Not Only a Dictionary, We Explain Words Better.",
  description: "we're all about digging deep into words to help you really understand what they mean. We're not just giving you simple definitions – we're like word detectives, uncovering all the interesting details about each word.",
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
