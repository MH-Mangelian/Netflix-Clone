import { useState, useEffect } from "react";
import { Movie } from "@/typings";
interface Props {
  netflixOriginals: Movie[];
}
import { baseUrl } from "@/constants/movie";
import Image from "next/image";
import {FaPlay} from "react-icons/fa";

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
        <Image src={`${baseUrl}${movie?.backdrop_path}`}
        layout='fill'
        objectFit="cover" />
      </div>

      <h1 className="font-bold text-2xl lg:text-7x md:text-4xl">{movie?.title || movie?.name || movie?.original_name}</h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>

      <div>
        <button className="flex items-center gap-x-2 bg-red-600 rounded-md py-2 px-2"><FaPlay className="h-4 w-4"/> Play</button>
        <button className="flex items-center gap-x-2">More Info</button>
      </div>
    </div>
  );
};

export default Banner;
