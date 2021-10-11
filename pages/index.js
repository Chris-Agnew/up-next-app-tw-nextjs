import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home({ results }) {
  return (
    <div className="font-nunito">
      <Navbar />
      <Hero results={results} />
    </div>
  );
}

export async function getServerSideProps() {
  const popular = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await popular.json();

  return {
    props: {
      results: data.results,
    },
  };
}
