import { Rerousel } from "rerousel";
import { useRef } from "react";
import Image from "next/image";

const Hero = ({ results }) => {
  const tvShow = useRef(null);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="px-2 bg-black">
      <Rerousel itemRef={tvShow}>
        {results.map(result => {
          return (
            <div className="relative text-gray-200" key={result.id}>
              <div className="bg-black ">
                <Image
                  src={
                    `${BASE_URL}${
                      result.backdrop_path || result.poster_path
                    }` || `${BASE_URL}${result.poster_path}`
                  }
                  height={1000}
                  width={1920}
                  ref={tvShow}
                  alt={result.name}
                  key={result.id}
                  className="opacity-80 hidden md:flex"
                />
                <Image
                  src={
                    `${BASE_URL}${
                      result.backdrop_path || result.poster_path
                    }` || `${BASE_URL}${result.poster_path}`
                  }
                  height={500}
                  width={400}
                  ref={tvShow}
                  alt={result.name}
                  key={result.id}
                  className="opacity-80 flex md:hidden"
                />
              </div>

              <div className="absolute bottom-10 left-10">
                <h1 className="text-3xl">{result.name}</h1>
                <p className="w-1/2 text-lg truncate">{result.overview}</p>
              </div>
            </div>
          );
        })}
      </Rerousel>
    </div>
  );
};

export default Hero;
