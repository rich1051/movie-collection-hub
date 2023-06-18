import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";

// importing routes:
import MovieList from "../MovieList/MovieList";
import Details from "../Details/Details";

// importing Material UI tools:
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
// import AddMovie here?

function App() {
  return (
    <div className="App">
      <Typography variant="h2">The Movies Saga!</Typography>
      <Router>
{/* MovieList will serve as "Home" page: */}
        <Route path="/" exact>
          <MovieList />
        </Route>
{/* on click of any movie poster, go to "Details" page */}
        <Route path="/details" exact>
          <Details />
        </Route>
{/* Add Movie page */}
        <Route path="/addMovie" exact>
{/* AddMovie route here if time permits */}
        </Route>
      </Router>
    </div>
  );
}

export default App;
