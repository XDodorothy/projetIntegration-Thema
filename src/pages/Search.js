import '../styles/search.css'; 
import '../styles/styles.css'; 
import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { BrowserRouter as Router , useHistory, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from 'react-loading-icons';
import { Rating } from '../script';  // Importer Rating Star 

const Search = () => {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState('popularity');//filtre
  const [startDate, setStartDate] = useState('');//filtre
  const [endDate, setEndDate] = useState('');//filtre
  const [runtime, setRuntime] = useState(''); //filtre
  const [data, setData] = useState([]);
  const history = useHistory();
  const { page:pageParam } = useParams();
  const [page, setPage] = useState(pageParam ? parseInt(pageParam) : 1);
  const [loading, setLoading] = useState(false);
  const queryParam = useQuery();
  const keyword = queryParam.get('keyword');
  window.scrollTo({ top: 0, behavior: "instant" });
  //UseEffect
  const keyParam = keyword || query;
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  let url = `https://api.themoviedb.org/3/discover/movie?q=${keyParam}&language=en-US&page=1&api_key=a67b57849deb687f2cd49d7a8298b366`;

  const handleFilter = (apply) => (event) => {
    apply(event.target.value);

    setPage(1); // réinitialiser à la page 1 à chaque modification de filtre
  };

  const applyFilter = () => {
    setPage(1); // Réinitialiser la page à 1
    setLoading(true);
    
    if (sortBy !== 'popularity') {
      url += `&sort_by=${sortBy}`;
    }
    if (startDate && endDate) {
      url += `&release_date.gte=${startDate}&release_date.lte=${endDate}`;
    } 
    if (runtime) {
      url += `&with_runtime.gte=${runtime}`;
    } 

    axios.get(url)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // lit URL pour récupérer ce qui est écrit dans keyword = URL
  //UseEffect
  useEffect(() => {
    if (keyParam) {
      setLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${keyParam}&page=${page}`)
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }

  }, [keyParam, page]);


 // Fonction pour mettre à jour la valeur du champ de recherche et l'URL
 const handleSearchChange = (event) => {
  const newQuery = event.target.value;
  setQuery(newQuery);
  setPage(1); // Réinitialiser la page à 1 lors de la recherche
  history.push(`/search/?&keyword=${newQuery}`);
};

// Fonction pour mettre à jour la page
const updatePage = (newPage) => {
  setPage(newPage);
  history.push(`/search/?keyword=${query}&page=${newPage}`);
};



  // Reset filter
  const resetFilters = () => {
    setQuery("");
    setSortBy('popularity');
    setStartDate('');
    setEndDate('');
    setRuntime('');
 // Reconstruire l'URL sans les filtres
 let resetUrl = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${keyParam}&page=1`;
 setLoading(true);
 axios.get(resetUrl)
 .then((res) => {
   setData(res.data.results);
   setLoading(false);
 })
 .catch(() => setLoading(false));
};



  // Si il y a un filtre, 
  const hasFilters = () => {
    return (
      sortBy !== 'popularity' || // Si le sortBy n'a pas comme selection 'popularity' alors cela veut dire qu'il y a un filtre
      startDate !== '' ||
      endDate !== '' ||
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
                <input 
                  type="text" 
                  id="search-input" 
                  placeholder="Search by Movie Title..." 
                  value={keyword} 
                  onChange={handleSearchChange} 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 pb-4 text-center">
          <div className="col-md-6 col-lg-4 sort-by bg-color">
            <header className="p-5">
              <div className="filters">
                <h6>Please, apply only one filter at a time</h6>
                <div className="mb-3 selection">
                  <label htmlFor="sort-by">Sort by</label>
                  <select 
                    id="sort-by" 
                    value={sortBy} 
                    className="form-input" 
                    onChange={handleFilter(setSortBy)}
                  >
                    <option value="popularity">Popularity</option>
                    <option value="title.asc">Title</option>
                    <option value="primary_release_date.asc">Year Published</option>
                    <option value="vote_average.desc">Higher vote</option>
                  </select>
                </div>
                <div className="selection mb-3">
                  <label htmlFor="start-date">Released Date</label>
                  <input 
                    type="date" 
                    id="release_date.lte" 
                    value={startDate} 
                    className="form-input mb-2" 
                    onChange={handleFilter(setStartDate)}
                  />
                  <label htmlFor="end-date">End Date</label>
                  <input 
                    type="date" 
                    id="release_date.gte" 
                    value={endDate} 
                    className="form-input" 
                    onChange={handleFilter(setEndDate)} 
                  />
                </div>
                <div className="selection mb-3">
                  <label htmlFor="runtime">Select Duration</label>
                  <select 
                    id="runtime" 
                    value={runtime}
                    className="form-input" 
                    onChange={handleFilter(setRuntime)}
                  >
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
                  </select>
                </div>
                <div className="centerer">
                  <div className="wrap">
                    <button className="btn-5" onClick={applyFilter}>Apply</button>
                  </div>
                </div>
                {hasFilters() && (
                  <div className="centerer">
                    <div className="wrap wrap2">
                      <button className="btn-5" onClick={resetFilters}>Reset Filter</button>
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
                              <img src='/NoImageLogo.png' alt='image-film' />
                            )}
                            <div className="card__overlay card__overlay--blue">
                              <div className="card__overlay-content">
                                <ul className="card__meta card__title">
                                  <li className="card__title list-unstyled">{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</li>
                                </ul>
                                <li className="card__title list-unstyled">{movie.title}</li>
                                <ul className="card__meta card__meta--last card__title" style={{ opacity: '1' }}>
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
                  <button className="page-link custom-link me-3" onClick={() => updatePage(1)}>
                    First Page
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3"
                    onClick={() => {
                      if (page === 1) {
                        window.alert("No previous page");
                      } else {
                        updatePage(page - 1);
                      }
                    }}>
                    {page === 1 ? <><i className="fa-solid fa-xmark"></i> </>: <>{page - 1} <i className="fa-solid fa-arrow-left"></i> </>}
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
                      if (page === 500) {
                        window.alert("No next page");
                      } else {
                        updatePage(page + 1);
                      }
                    }}>
                    Next Page
                    {page === 500 ? <> <i className="fa-solid fa-xmark"></i></> : <> <i className="fa-solid fa-arrow-right"></i>  {page + 1}</>}
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link custom-link me-3" onClick={() => updatePage(500)}>Last Page</button>
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