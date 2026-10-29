import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [productName, setProductName] =
    useState("");

  const navigate = useNavigate();

  const handleAnalyze = () => {

    const trimmedProduct =
      productName.trim();

    if (trimmedProduct === "") {
      alert("Please enter a product name");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="page-container">

      <div className="home-section">

        <h1 className="home-title">
          Product Sentiment Analyzer
        </h1>

        <p className="home-description">
          Analyze customer reviews and
          understand product sentiment easily.
        </p>


        <div className="home-search-card">

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
            >
              Analyze Product
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;