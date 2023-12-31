import { Hero, SearchBar, CustomFilter } from "@/components";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-bold">Card Catalogue</h1>
          <p>Explore cars!</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
      </div>
    </main>
  )
}
