import { useState, useEffect } from "react";
import { Movie } from "@/typings";
interface Props {
  netflixOriginals: Movie[];
}
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        <Image
          src={`${baseUrl}${movie?.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          alt="__Error__"
        />
      </div>

      <h1 className="font-bold text-2xl lg:text-7x md:text-4xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">
        {movie?.overview}
      </p>

      <div className="flex space-x-3">
        <button className="flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl text-black bg-slate-50">
          <FaPlay className="h-4 w-4 lg:h-6 lg:w-6 text-black" /> Play
        </button>
        <button className="flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl text-gray-200 bg-gray-700">
          More Info <HiInformationCircle className="h-4 w-4 lg:h-6 lg:w-6" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
