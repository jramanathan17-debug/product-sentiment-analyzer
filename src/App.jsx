import { useState } from "react";
import api from "./services/api";

import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function App() {
  // =========================================
  // PRODUCT SEARCH
  // =========================================

  const [productName, setProductName] = useState("");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // =========================================
  // API DATA
  // =========================================

  const [productData, setProductData] = useState(null);
  const [apiError, setApiError] = useState("");

  // =========================================
  // REVIEW FILTER
  // =========================================

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  // =========================================
  // SENTIMENT DISTRIBUTION DATA
  // =========================================

  const sentimentData = [
    {
      name: "Positive",
      value: 70,
    },
    {
      name: "Neutral",
      value: 18,
    },
    {
      name: "Negative",
      value: 12,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
    "#ef4444",
  ];

  // =========================================
  // SENTIMENT TREND DATA
  // =========================================

  const trendData = [
    {
      date: "Jan 1",
      positive: 40,
      neutral: 15,
      negative: 10,
    },
    {
      date: "Jan 5",
      positive: 55,
      neutral: 18,
      negative: 12,
    },
    {
      date: "Jan 10",
      positive: 48,
      neutral: 20,
      negative: 15,
    },
    {
      date: "Jan 15",
      positive: 65,
      neutral: 16,
      negative: 8,
    },
    {
      date: "Jan 20",
      positive: 72,
      neutral: 14,
      negative: 6,
    },
    {
      date: "Jan 25",
      positive: 80,
      neutral: 12,
      negative: 5,
    },
  ];

  // =========================================
  // RATING DISTRIBUTION DATA
  // =========================================

  const ratingData = [
    {
      rating: "5 Star",
      reviews: 120,
    },
    {
      rating: "4 Star",
      reviews: 70,
    },
    {
      rating: "3 Star",
      reviews: 30,
    },
    {
      rating: "2 Star",
      reviews: 18,
    },
    {
      rating: "1 Star",
      reviews: 12,
    },
  ];

  // =========================================
  // WORD FREQUENCY DATA
  // =========================================

  const wordFrequencyData = [
    {
      word: "Quality",
      count: 85,
    },
    {
      word: "Good",
      count: 72,
    },
    {
      word: "Product",
      count: 65,
    },
    {
      word: "Price",
      count: 54,
    },
    {
      word: "Delivery",
      count: 48,
    },
    {
      word: "Useful",
      count: 42,
    },
  ];

  // =========================================
  // CUSTOMER REVIEWS
  // =========================================

  const reviews = [
    {
      title: "Excellent Product",
      text:
        "The product quality is very good. I am completely satisfied with the purchase.",
      sentiment: "Positive",
      rating: "★★★★★",
      date: "Jan 25, 2026",
    },

    {
      title: "Good Product",
      text:
        "Good quality and works as expected. Delivery was also good.",
      sentiment: "Positive",
      rating: "★★★★☆",
      date: "Jan 20, 2026",
    },

    {
      title: "Average Experience",
      text:
        "The product is okay. Some features are useful, but there is room for improvement.",
      sentiment: "Neutral",
      rating: "★★★☆☆",
      date: "Jan 15, 2026",
    },

    {
      title: "Not Satisfied",
      text:
        "The product did not meet my expectations and the quality could be better.",
      sentiment: "Negative",
      rating: "★★☆☆☆",
      date: "Jan 10, 2026",
    },
  ];

  // =========================================
  // ANALYZE PRODUCT
  // =========================================

  const handleAnalyze = () => {
    const trimmedProduct = productName.trim();

    if (trimmedProduct === "") {
      alert("Please enter a product name");
      return;
    }

    setApiError("");
    setProductData(null);
    setIsAnalyzing(true);

    /*
      Backend API connection will be added
      after the backend member provides:

      1. API URL
      2. GET / POST method
      3. Request format
      4. Response JSON format

      For now sample frontend data is used.
    */

    setTimeout(() => {
      setSearchedProduct(trimmedProduct);
      setIsAnalyzing(false);
    }, 1000);
  };

  // =========================================
  // FILTER REVIEWS
  // =========================================

  const filteredReviews =
    selectedFilter === "All"
      ? reviews
      : reviews.filter(
          (review) =>
            review.sentiment === selectedFilter
        );

  // =========================================
  // MAIN UI
  // =========================================

  return (
    <div className="app-container">

      {/* =====================================
          NAVBAR
      ====================================== */}

      <nav className="navbar">

        <div className="navbar-logo">
          Product Sentiment Analyzer
        </div>

        <div className="navbar-links">

          <a href="#dashboard">
            Dashboard
          </a>

          <a href="#reviews">
            Reviews
          </a>

          <a href="#analytics">
            Analytics
          </a>

          <a href="#about">
            About
          </a>

        </div>

      </nav>


      {/* =====================================
          HEADER
      ====================================== */}

      <h1 className="main-title">
        Product Sentiment Analyzer
      </h1>

      <p className="subtitle">
        Product Review Dashboard
      </p>


      {/* =====================================
          SEARCH PRODUCT
      ====================================== */}

      <div className="search-card">

        <h2>
          Search Product
        </h2>

        <div className="search-container">

          <input
            type="text"
            value={productName}
            onChange={(e) =>
              setProductName(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAnalyze();
              }
            }}
            placeholder="Enter product name..."
          />

          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
          >
            {isAnalyzing
              ? "Analyzing..."
              : "Analyze Product"}
          </button>

        </div>


        {/* =====================================
            LOADING MESSAGE
        ====================================== */}

        {isAnalyzing && (
          <div className="loading-message">

            <div className="loading-spinner"></div>

            <span>
              Analyzing product reviews...
            </span>

          </div>
        )}


        {/* =====================================
            SEARCH SUCCESS
        ====================================== */}

        {searchedProduct && !isAnalyzing && (
          <div className="search-result">

            <span className="success-icon">
              ✓
            </span>

            <span>
              Analysis completed for{" "}
              <strong>
                {searchedProduct}
              </strong>
            </span>

          </div>
        )}


        {/* =====================================
            API ERROR
        ====================================== */}

        {apiError && (
          <div className="api-error">
            {apiError}
          </div>
        )}

      </div>


      {/* =====================================
          PRODUCT SUMMARY
      ====================================== */}

      {searchedProduct && !isAnalyzing && (
        <div className="product-summary">

          <div className="product-summary-header">

            <div>

              <p className="summary-label">
                Analyzed Product
              </p>

              <h2>
                {searchedProduct}
              </h2>

            </div>

            <span className="analysis-status">
              Analysis Completed
            </span>

          </div>


          <div className="summary-grid">

            <div className="summary-item">

              <span>
                Total Reviews
              </span>

              <strong>
                {productData?.totalReviews ?? 250}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Average Rating
              </span>

              <strong>
                {productData?.averageRating ?? "4.4 / 5"}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Positive
              </span>

              <strong className="summary-positive">
                {productData?.positive ?? "70%"}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Neutral
              </span>

              <strong className="summary-neutral">
                {productData?.neutral ?? "18%"}
              </strong>

            </div>


            <div className="summary-item">

              <span>
                Negative
              </span>

              <strong className="summary-negative">
                {productData?.negative ?? "12%"}
              </strong>

            </div>

          </div>

        </div>
      )}


      {/* =====================================
          DASHBOARD CARDS
      ====================================== */}

      <div
        id="dashboard"
        className="dashboard-cards"
      >

        <div className="stat-card">

          <h3>
            Total Reviews
          </h3>

          <p>
            250
          </p>

        </div>


        <div className="stat-card">

          <h3>
            Positive
          </h3>

          <p>
            70%
          </p>

        </div>


        <div className="stat-card">

          <h3>
            Neutral
          </h3>

          <p>
            18%
          </p>

        </div>


        <div className="stat-card">

          <h3>
            Negative
          </h3>

          <p>
            12%
          </p>

        </div>

      </div>


      {/* =====================================
          ANALYTICS
      ====================================== */}

      <div
        id="analytics"
        className="analytics-section"
      >

        {/* ===================================
            SENTIMENT DISTRIBUTION
        ==================================== */}

        <div className="chart-card small-chart">

          <h2>
            Sentiment Distribution
          </h2>

          <div className="chart-scroll">

            <PieChart
              width={450}
              height={350}
            >

              <Pie
                data={sentimentData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >

                {sentimentData.map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                    />
                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </div>

        </div>


        {/* ===================================
            SENTIMENT TRENDS
        ==================================== */}

        <div className="chart-card large-chart">

          <h2>
            Sentiment Trends
          </h2>

          <div className="chart-scroll">

            <LineChart
              width={800}
              height={350}
              data={trendData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="date"
              />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="positive"
                stroke="#22c55e"
                strokeWidth={3}
                name="Positive"
              />

              <Line
                type="monotone"
                dataKey="neutral"
                stroke="#f59e0b"
                strokeWidth={3}
                name="Neutral"
              />

              <Line
                type="monotone"
                dataKey="negative"
                stroke="#ef4444"
                strokeWidth={3}
                name="Negative"
              />

            </LineChart>

          </div>

        </div>


        {/* ===================================
            RATING DISTRIBUTION
        ==================================== */}

        <div className="chart-card large-chart">

          <h2>
            Rating Distribution
          </h2>

          <div className="chart-scroll">

            <BarChart
              width={800}
              height={350}
              data={ratingData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="rating"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="reviews"
                fill="#2563eb"
                name="Reviews"
              />

            </BarChart>

          </div>

        </div>


        {/* ===================================
            MOST USED WORDS
        ==================================== */}

        <div className="chart-card large-chart">

          <h2>
            Most Used Words
          </h2>

          <div className="chart-scroll">

            <BarChart
              width={800}
              height={350}
              data={wordFrequencyData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="word"
              />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="count"
                fill="#7c3aed"
                name="Word Frequency"
              />

            </BarChart>

          </div>

        </div>

      </div>


      {/* =====================================
          CUSTOMER REVIEWS
      ====================================== */}

      <div
        id="reviews"
        className="reviews-section"
      >

        <h2>
          Customer Reviews
        </h2>


        {/* FILTER BUTTONS */}

        <div className="filter-container">

          <button
            className={
              selectedFilter === "All"
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setSelectedFilter("All")
            }
          >
            All
          </button>


          <button
            className={
              selectedFilter === "Positive"
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setSelectedFilter("Positive")
            }
          >
            Positive
          </button>


          <button
            className={
              selectedFilter === "Neutral"
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setSelectedFilter("Neutral")
            }
          >
            Neutral
          </button>


          <button
            className={
              selectedFilter === "Negative"
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setSelectedFilter("Negative")
            }
          >
            Negative
          </button>

        </div>


        {/* REVIEW LIST */}

        {filteredReviews.length > 0 ? (

          filteredReviews.map(
            (review, index) => (

              <div
                className="review-card"
                key={index}
              >

                <div className="review-header">

                  <strong>
                    {review.title}
                  </strong>

                  <span
                    className={
                      review.sentiment ===
                      "Positive"
                        ? "positive-badge"
                        : review.sentiment ===
                          "Neutral"
                        ? "neutral-badge"
                        : "negative-badge"
                    }
                  >
                    {review.sentiment}
                  </span>

                </div>


                <p>
                  {review.text}
                </p>


                <div className="review-details">

                  <span className="rating">
                    {review.rating}
                  </span>

                  <span>
                    {review.date}
                  </span>

                </div>

              </div>

            )
          )

        ) : (

          <p className="no-reviews">
            No reviews found.
          </p>

        )}

      </div>


      {/* =====================================
          ABOUT
      ====================================== */}

      <div
        id="about"
        className="about-section"
      >

        <h2>
          About This Project
        </h2>

        <p>
          Product Sentiment Analyzer is a
          web-based application designed to
          analyze customer reviews and display
          sentiment insights through an
          interactive dashboard.
        </p>


        <h3>
          Technologies Used
        </h3>

        <ul>

          <li>
            React.js
          </li>

          <li>
            Recharts
          </li>

          <li>
            Axios
          </li>

          <li>
            Python Backend
          </li>

          <li>
            Database
          </li>

        </ul>

      </div>

    </div>
  );
}

export default App;