import SearchBar from "@/components/search/SearchBar"

export default function SearchLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <SearchBar place="/search" isSingleWordSearch={false} />
        {children}
      </section>
    )
  }