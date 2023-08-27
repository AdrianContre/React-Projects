export function Movies({movies}) {
    if (!Array.isArray(movies)) {
        return <p>No se encontraron películas</p>;
    }
    return (
        <ul className="movies">
            {movies.map(movie => (
                <li key={movie.imdbID} className="movie">
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img alt={movie.Title} src={movie.Poster}></img>
                </li>
            ))
        }
        </ul>
    )
}