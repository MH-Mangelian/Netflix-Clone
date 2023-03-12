import { Movie } from "@/typings";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <div className="h-40 space-y-0.5 md:space-y-2">
        <h2 className="w-60 cursor-pointer text-sm md:text-2x font-semibold text-white transition duration-200 hover:text-white/90">{title}</h2>
        <div className="group relative md:-ml-2">
          <HiChevronLeft className="w-9 h-9 absolute top-0 bottom-0 left-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

            <div className="flex items-center space-x-0.5 overflow-x-scroll overflow-hidden md:space-x-2.5 ">
                {
                    movies.map(movie =>(
                        <Thumbnail key={movie.id} movie={movie} />
                    ))
                }
            </div>

          <HiChevronRight className="w-9 h-9 absolute top-0 bottom-0 right-2 z-40 m-auto cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
};

export default Row;
