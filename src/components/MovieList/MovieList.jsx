import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
// import MovieItem here?

function MovieList() {

    const dispatch = useDispatch();
    const moviesReducer = useSelector(store => store.moviesReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {moviesReducer.map(movie => {
                    return (
                        <div key={movie.id} >
{/* MovieItem here? Get rid of h3 and img below: */}
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;