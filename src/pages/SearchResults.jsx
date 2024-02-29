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
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-5 px-4">
        <h2>{query} için sonuçlar</h2>

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
  );
};

export default SearchResults;
