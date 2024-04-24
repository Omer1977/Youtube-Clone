import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { getData } from "../utils/getData";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";
import { useEffect, useState } from "react";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);
  const query = searchParams.get("search_query");


  useEffect(() => {
    getData(`/search?query=${query}`).then((res) => setResults(res.data));
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex justify-center flex-1 p-4 h-screen">
        <div className="flex flex-col max-w-lg gap-10">
          <p className="text-lg">
        <span className="font-bold">{query}</span> için sonuçlar
        </p>

        {!results ? (
          <Loader type={"video"} />
        ) : (
          results.map(
            (item) =>
              item.type === "video" && (
                <VideoCard type={"deneme"} video={item} />
              )
          )
        )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
