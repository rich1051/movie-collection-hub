import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const detailsReducer = useSelector((store) => store.detailsReducer);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        {detailsReducer.map((details) => (
          <div key={details.id}>
            <h3>{details.title}</h3>
            <img
              src={details.poster}
              alt={details.title}
            />
            <p>Genres: {details.genres}</p>
            <p>Description: {details.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Back</button>
    </>
  );
}

export default Details;
