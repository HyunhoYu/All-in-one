import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieEach({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p style={{ fontSize: 24, fontWeight: "bold" }}>
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul>
        {genres.map((g) => (
          <li>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MovieEach.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieEach;
