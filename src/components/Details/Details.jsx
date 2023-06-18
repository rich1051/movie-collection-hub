import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './Details.css'

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
      <div className="details">
        {detailsReducer.map((details) => (
          <div key={details.id}>
            <h3 className="details-title">{details.title}</h3>
            <img
              className="details-image"
              src={details.poster}
              alt={details.title}
            />
            <p className="details-genre">Genres: {details.genres}</p>
            <p className="details-description">Description: {details.description}</p>
          </div>
        ))}
        <br />
      </div>
      <Button className="details-button" variant="contained" onClick={handleClick}>Back</Button>
    </>
  );
}

export default Details;
