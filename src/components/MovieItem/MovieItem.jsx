import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieItem.css"

function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({
      type: "FETCH_DETAILS",
      payload: movie.id,
    });
    history.push("/details");
  };

  return (
    <div className="movie-title-poster">
      <h3 className="movie-title">{movie.title}</h3>
      <img className="movie-poster" onClick={handleClick} src={movie.poster} alt={movie.title} />
    </div>
  );
}

export default MovieItem;
