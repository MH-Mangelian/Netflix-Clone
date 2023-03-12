import { Movie } from "@/typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-30 min-w-[180px] transition duration-200 ease-out md:h-35 md:md:min-w[260px] md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt="__img__"
      />
    </div>
  );
};

export default Thumbnail;
