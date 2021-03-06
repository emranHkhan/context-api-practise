import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <ul style={{listStyle: 'none', display: 'flex', backgroundColor: 'steelblue', padding: 10, justifyContent: 'center'}}>
                <li style={{marginRight: 30}}>Emran H Khan</li>
    
                <li>List of Movies: {movies.length}</li>
            </ul>
        </div>
    );
};

export default Nav;