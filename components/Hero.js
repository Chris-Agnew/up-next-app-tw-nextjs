import { Rerousel } from "rerousel";
import { useRef } from "react";
import Image from "next/image";

const Hero = ({ results }) => {
  const tvShow = useRef(null);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="">
      <Rerousel itemRef={tvShow}>
        {results.map(result => {
          return (
            <div className="relative text-gray-200 bg-blend-darken">
              <div className="bg-black ">
                <img
                  src={
                    `${BASE_URL}${
                      result.backdrop_path || result.poster_path
                    }` || `${BASE_URL}${result.poster_path}`
                  }
                  height={1080}
                  width={1920}
                  ref={tvShow}
                  alt={result.name}
                  key={result.id}
                  className="opacity-80"
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
