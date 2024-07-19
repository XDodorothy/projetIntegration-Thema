import '../styles/search.css'; 
import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loading-icons';
import { Rating } from '../script';  // Importer Rating Star 

const Search = (props) => {
  const { keyword } = props; 
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState('popularity');//filtre
  const [startDate, setStartDate] = useState('');//filtre
  const [endDate, setEndDate] = useState('');//filtre
  const [genre, setGenre] = useState('');//filtre
  const [age, setAge] = useState('');//filtre
  const [userRating, setUserRating] = useState('');//filtre
  const [voteCount, setVoteCount] = useState('');//filtre
  const [runtime, setRuntime] = useState(''); //filtre
  const [data, setData] = useState([]);
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


  const keyParam = keyword || query;

  useEffect(() => {
    if (keyParam) {
      setLoading(true);
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${keyParam}&page=${page}`)
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [keyParam, page]);

  const applyFilter = () => {
    setLoading(true);
    const filters = {
      sort_by: sortBy,
      with_genres: genre,
      'primary_release_date.gte': startDate,
      'primary_release_date.lte': endDate,
      certification_country: 'US',
      certification: age,
      'vote_average.gte': userRating,
      'vote_count.gte': voteCount,
      with_runtime: runtime
    };

    axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: 'a67b57849deb687f2cd49d7a8298b366',
        language: 'en-US',
        ...filters,
        page
      }
    })
    .then((res) => {
      setData(res.data.results);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  };

  const handleFilter = (apply) => (event) => {
    apply(event.target.value);
  };

  //Reset filter
  const resetFilters = () => {
    setQuery("");
    setSortBy('popularity');
    setStartDate('');
    setEndDate('');
    setGenre('');
    setAge('');
    setUserRating('');
    setVoteCount('');
    setRuntime('');
  };
  // Si il y a un filtre, 
  const hasFilters = () => {
    return (
      sortBy !== 'popularity' ||
      startDate !== '' ||
      endDate !== '' ||
      genre !== '' ||
      age !== '' ||
      userRating !== '' ||
      voteCount !== '' ||
      runtime !== ''
    );
  };

  //Show movie sheet
  const onClickMovie = (movie) => {
    history.push({
      pathname: '/movieSheet',
      state: { movie }
    });
  };


  return (
    <React.Fragment>
      <Navigation />
      <div className="container-fluid card-bg-color" style={{ maxWidth: '100%' }}>
        <div className="row">
          <div className="col-lg-12 text-center bg-color">
            <h5 className="font-weight-bold my-5">Search in the Movie Catalog</h5>
            <div className="search-container">
              <div className="search-bar">
                <input type="text" id="search-input" placeholder="Search by Movie Title..." onChange={handleFilter(setQuery)} />
                
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pb-4 text-center">
          <div className="col-md-6 col-lg-4 sort-by bg-color">
            <header className="p-5">
              <div className="filters">
                <div className="mb-3 selection">
                  <label htmlFor="sort-by">Sort by</label>
                  <select id="sort-by" value={sortBy} className="form-input" onChange={handleFilter(setSortBy)}>
                    <option value="popularity">Popularity</option>
                    <option value="top-rating">Top Rating</option>
                    <option value="year-published">Year Published</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="start-date">Released Date</label>
                  <input type="date" id="start-date" value={startDate} className="form-input mb-2" onChange={handleFilter(setStartDate)}/>
                  <label htmlFor="end-date">End Date</label>
                  <input type="date" id="end-date" value={endDate} className="form-input" onChange={handleFilter(setEndDate)} />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="genre">Genres</label>
                  <select id="genre" value={genre} className="form-input" onChange={handleFilter(setGenre)}>
                    <option value="">Select Genre</option>
                    <option value="28">Action</option>
                    <option value="12">Adventure</option>
                    <option value="80">Crime</option>
                    <option value="53">Thriller</option>
                    <option value="10752">War</option>
                    <option value="37">Western</option>
                    <option value="878">Science Fiction</option>
                    <option value="14">Fantasy</option>
                    <option value="27">Horror</option>
                    <option value="18">Drama</option>
                    <option value="10749">Romance</option>
                    <option value="36">History</option>
                    <option value="35">Comedy</option>
                    <option value="16">Animation</option>
                    <option value="99">Documentary</option>
                    <option value="10751">Family</option>
                    <option value="10402">Music</option>
                    <option value="10770">TV Movie</option>
                    <option value="9648">Mystery</option>
                  </select>
                </div>
                <div className="mb-3 selection">
                  <label htmlFor="age">Age</label>
                  <select id="age" value={age} className="form-input" onChange={handleFilter(setAge)}>
                  <option value="G">General Audience</option>
                  <option value="PG">Parental Guidance</option>
                  <option value="PG-13">Parents Strongly Cautioned</option>
                  <option value="R">Restricted</option>
                  </select>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="user-rating">User Rating </label>
                  <input id="user-rating" className="form-input" type="number" min="0" max="10" step="0.1" value={userRating} placeholder="Minimum rating" onChange={handleFilter(setUserRating)}/>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="vote-count">Min. Number of Votes </label>
                  <input type="number" id="vote-count" value={voteCount} min="0" placeholder="Minimum vote" className="form-input" />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="runtime">Select Duration</label>
                  <select id="runtime"  className="form-input" onChange={handleFilter(setRuntime)}>
                    <option value="">Any Duration</option>
                    <option value="75">75 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="105">105 minutes</option>
                    <option value="120">120 minutes</option>
                    <option value="135">135 minutes</option>
                    <option value="150">150 minutes</option>
                    <option value="165">165 minutes</option>
                    <option value="180">180 minutes</option>
                    <option value="195">195 minutes</option>
                    <option value="210">210 minutes</option>
                    <option value="225">225 minutes</option>
                    <option value="240">240 minutes</option>
                    <option value="255">255 minutes</option>
                    <option value="270">270 minutes</option>
                    <option value="285">285 minutes</option>
                    <option value="300">300 minutes</option>
                    <option value="315">315 minutes</option>
                    <option value="330">330 minutes</option>
                    <option value="345">345 minutes</option>
                    <option value="360">360 minutes</option>
                    <option value="any-duration">Any duration</option>
                  </select>
                </div>
                <div className="centerer">
                  <div className="wrap">
                    <button className="btn-5"
                    onClick={applyFilter}> Apply
                    </button>
                  </div>
                </div>
                {hasFilters() && (
                <div className="centerer">
                  <div className="wrap wrap2">
                    <button className="btn-5"
                     onClick={resetFilters}> Reset Filter
                    </button>
                  </div>
                </div>
                )}
              </div>
            </header>
          </div>
          <div className="col-md-6 col-lg-8 card-bg-color">
            <div>
              <h5 className="font-weight-bold">Movies Containing {keyParam}</h5>
            </div>
            <div className="site__wrapper">
              {loading ? (
                <div className="load">
                  <ThreeDots strokeOpacity={0.125} speed={0.75} />
                </div>
              ) : (
                <div className="row">
                  {data.map((movie) => (
                    <div className="col-xl-3 col-lg-6 col-md-12" key={movie.id}>
                      <div className="grid" style={{ width: '100%' }} onClick={() => onClickMovie(movie)}>
                        <div className="card">
                          <div className="card__image">
                            {movie.poster_path ? (
                              <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="image-film" />
                            ) : (
                              <div>No Image Available</div>
                            )}
                            <div className="card__overlay card__overlay--blue">
                              <div className="card__overlay-content">
                                <ul className="card__meta card__title">
                                  <li className="card__title list-unstyled">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</li>
                                  <li className="card__title list-unstyled">{movie.runtime ? `${movie.runtime} min` : 'N/A'}</li>
                                </ul>
                                <li className="card__title list-unstyled">{movie.title}</li>
                                <ul className="card__meta card__meta--last card__title">
                                  <li className="rating"><Rating movie={movie} /></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container-xxl">
          <div className="d-flex justify-content-evenly">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => setPage(1)}>
                    First Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      page === 1 ? window.alert("No previous page") : setPage(page - 1);
                    }}>
                    Back Page
                  </button>
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      page === 500 ? window.alert("No next page") : setPage(page + 1);
                    }}>
                    Next Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => setPage(500)}>Last Page</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

  export default Search;