import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/movieDetail.css';


export const MovieDetail = () => {
  const { id } = useParams();
  const [moviedetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMovieDetail = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=34c2295a&i=${id}`);
      console.log("Movie Detail API Response:", res.data);
      setMovieDetail(res.data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading movie details...</div>;
  }

  return (
    <div className="movie-detail-container">
      {moviedetail ? (
        <div className="movie-detail">
          {/* Header Section */}
          <div className="movie-header">
            <div className="movie-poster">
              <img 
                src={moviedetail.Poster !== "N/A" ? moviedetail.Poster : "/placeholder-poster.jpg"} 
                alt={moviedetail.Title}
                className="poster-image"
              />
            </div>
            
            <div className="movie-info">
              <div className="title-section">
                <h1 className="movie-title">{moviedetail.Title} <span className="movie-year">({moviedetail.Year})</span></h1>
                <div className="movie-metadata">
                  <span className="certificate">{moviedetail.Rated}</span>
                  <span className="runtime">{moviedetail.Runtime}</span>
                  <span className="genre">{moviedetail.Genre}</span>
                  <span className="release-date">{moviedetail.Released}</span>
                </div>
              </div>

              {/* Rating Section */}
              <div className="rating-section">
                <div className="imdb-rating">
                  <div className="rating-label">IMDb RATING</div>
                  <div className="rating-score">
                    <span className="star">⭐</span>
                    <span className="score">{moviedetail.imdbRating || "N/A"}</span>
                    <span className="max-score">/10</span>
                    <span className="votes">{moviedetail.imdbVotes || "N/A"} votes</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="action-buttons">
                <button className="btn-watchlist">+ Add to Watchlist</button>
                <button className="btn-rate">Rate</button>
                <button className="btn-share">Share</button>
              </div>

              {/* Quick Info */}
              <div className="quick-info">
                <h3>Quick Links</h3>
                <div className="info-links">
                  <a href="#cast">Cast & crew</a>
                  <a href="#reviews">User reviews</a>
                  <a href="#trivia">Trivia</a>
                  <a href="#faq">FAQ</a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="movie-content">
            {/* Left Column */}
            <div className="content-left">
              {/* Plot Section */}
              <section className="plot-section">
                <h2>Plot</h2>
                <p className="plot-text">{moviedetail.Plot}</p>
              </section>

              {/* Cast Section */}
              <section id="cast" className="cast-section">
                <h2>Cast & Crew</h2>
                <div className="cast-info">
                  <div className="info-row">
                    <strong>Director:</strong> {moviedetail.Director}
                  </div>
                  <div className="info-row">
                    <strong>Writers:</strong> {moviedetail.Writer}
                  </div>
                  <div className="info-row">
                    <strong>Stars:</strong> {moviedetail.Actors}
                  </div>
                </div>
              </section>

              {/* Details Section */}
              <section className="details-section">
                <h2>Details</h2>
                <div className="details-grid">
                  <div className="detail-item">
                    <strong>Release Date:</strong> {moviedetail.Released}
                  </div>
                  <div className="detail-item">
                    <strong>Country:</strong> {moviedetail.Country}
                  </div>
                  <div className="detail-item">
                    <strong>Language:</strong> {moviedetail.Language}
                  </div>
                  <div className="detail-item">
                    <strong>Also Known As:</strong> {moviedetail.Title}
                  </div>
                  <div className="detail-item">
                    <strong>Production:</strong> {moviedetail.Production || "N/A"}
                  </div>
                  <div className="detail-item">
                    <strong>Awards:</strong> {moviedetail.Awards}
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="content-right">
              <div className="sidebar">
                <div className="sidebar-section">
                  <h3>Technical Specs</h3>
                  <div className="specs-list">
                    <div className="spec-item">
                      <strong>Runtime:</strong> {moviedetail.Runtime}
                    </div>
                    <div className="spec-item">
                      <strong>Color:</strong> Color
                    </div>
                    <div className="spec-item">
                      <strong>Sound Mix:</strong> {moviedetail.Language}
                    </div>
                    <div className="spec-item">
                      <strong>Aspect Ratio:</strong> 2.39 : 1
                    </div>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Box Office</h3>
                  <div className="box-office">
                    <div className="revenue-item">
                      <strong>Budget:</strong> N/A
                    </div>
                    <div className="revenue-item">
                      <strong>Gross Worldwide:</strong> {moviedetail.BoxOffice || "N/A"}
                    </div>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3>Company Credits</h3>
                  <div className="companies">
                    <div className="company-item">
                      <strong>Production:</strong> {moviedetail.Production || "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="error-message">
          <h2>Movie not found</h2>
          <p>Unable to load movie details. Please try again.</p>
          <button onClick={getMovieDetail} className="btn-retry">
            Retry
          </button>
        </div>
      )}
    </div>
  );
};




//=========================================================================================

