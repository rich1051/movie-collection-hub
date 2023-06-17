import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// importing Material UI tools:
import Button from '@mui/material/Button';

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
      <Button variant="contained" onClick={handleClick}>Back</Button>
    </>
  );
}

export default Details;
