import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Footer } from './Footer/Footer';
import { MoviesContextProvider } from './MoviesContext';
import {PopularMovies} from"./Movies/PopulerMovies"
import { Toprated } from './Movies/Toprated';
import { NowPlaying } from './Movies/NowPlaying';
import { UpComing } from './Movies/UpComing';
import { TopRatedTv } from './TvSeries/TopRatedTv';
import { PopularTv } from './TvSeries/PopularTv';
import { OAirTv } from './TvSeries/OAirTv';
import { Contact } from './Pages/About/Contact/Contact';

import { AllMovies } from './AllMovies/AllMovies';
import { AllTv } from './AllTv/AllTv';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
import { TvDetails } from './TvDetails/TvDetails';
import { NotFound } from './NotFound';

import {About} from "./Pages/About/About"


function App() {
  return (
    <>
      <Navbar />
      <MoviesContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='moviedetails/:id' element={<MoviesDetails />} />
          <Route path='tvdetails/:id' element={<TvDetails />} />
          <Route path='allmovies' element={<AllMovies />} />
          <Route path='alltv' element={<AllTv />} />
          <Route path='populermovies' element={<PopularMovies />} />
          <Route path='toprated' element={<Toprated />} />
          <Route path='nowplaying' element={<NowPlaying />} />
          <Route path='upcoming' element={<UpComing />} />
          <Route path='topratedtv' element={<TopRatedTv />} />
          <Route path='populartv' element={<PopularTv />} />
          <Route path='onairtv' element={<OAirTv />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          
        </Routes>
      </MoviesContextProvider>
      <Footer />
    </>
  );
}

export default App;
