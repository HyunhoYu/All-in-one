import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovies(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <strong>Loaidng...</strong>
      ) : (
        <div>
          <img src={movies.background_image_original} alt={movies.id} />
          <h2>rating:{movies.rating}</h2>
          <h2>running time:{movies.runtime}</h2>
          <h2>download count:{movies.download_count}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
