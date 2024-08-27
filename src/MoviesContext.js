import { createContext, } from "react"
import axios from "axios";
import React, { useEffect, useState } from "react";
export let MoviesContext = createContext([])

export function MoviesContextProvider(props) {


    let keyapi = 'aa0212de7d4909b3e6cea119c11d7140'

    const [populerMoviesSlider, setPopulerMoviesSlider] = useState([])
    const [populerTvSlider, setPopulerTvSlider] = useState([])
    const [populerMovies, setPopulerMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upComingMovies, setUpComingMovies] = useState([])
    const [populerTv, setPopulerTv] = useState([])
    const [topRatedTv, setTopRatedTv] = useState([])
    const [onAirTv, setOnAirTv] = useState([])

    async function getMoviesAndTvData(type, category, page, callback) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${type}/${category}?api_key=${keyapi}&language=en-US&page=${page}`)
        callback(data.results)
    }

    useEffect(() => {


        // home movies and tv section
        getMoviesAndTvData("movie", "top_rated", "1", setPopulerMoviesSlider)
        getMoviesAndTvData("tv", "top_rated", "1", setPopulerTvSlider)

        // movies  category
        getMoviesAndTvData("movie", "popular", "5", setPopulerMovies)
        getMoviesAndTvData("movie", "top_rated", "2", setTopRatedMovies)
        getMoviesAndTvData("movie", "now_playing", "1", setNowPlayingMovies)
        getMoviesAndTvData("movie", "upcoming", "2", setUpComingMovies)

        // tv series  category
        getMoviesAndTvData("tv", "popular", "1", setPopulerTv)
        getMoviesAndTvData("tv", "top_rated", "1", setTopRatedTv)
        getMoviesAndTvData("tv", "on_the_air", "4", setOnAirTv)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <MoviesContext.Provider value={{

        onAirTv, topRatedTv, populerTv, populerMovies, populerTvSlider, populerMoviesSlider, nowPlayingMovies, topRatedMovies, upComingMovies
    }}>
        {props.children}
    </MoviesContext.Provider>
}

