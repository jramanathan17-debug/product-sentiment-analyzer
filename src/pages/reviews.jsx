import { useState } from "react";

function Reviews() {

  const [selectedFilter, setSelectedFilter] =
    useState("All");


  const reviews = [
    {
      title: "Excellent Product",
      text: "The product quality is very good. I am completely satisfied with the purchase.",
      sentiment: "Positive",
      rating: "★★★★★",
      date: "Jan 25, 2026",
    },

    {
      title: "Good Product",
      text: "Good quality and works as expected. Delivery was also good.",
      sentiment: "Positive",
      rating: "★★★★☆",
      date: "Jan 20, 2026",
    },

    {
      title: "Average Experience",
      text: "The product is okay. Some features are useful, but there is room for improvement.",
      sentiment: "Neutral",
      rating: "★★★☆☆",
      date: "Jan 15, 2026",
    },

    {
      title: "Not Satisfied",
      text: "The product did not meet my expectations and the quality could be better.",
      sentiment: "Negative",
      rating: "★★☆☆☆",
      date: "Jan 10, 2026",
    },
  ];


  const filteredReviews =
    selectedFilter === "All"
      ? reviews
      : reviews.filter(
          (review) =>
            review.sentiment ===
            selectedFilter
        );


  return (
    <div className="page-container">

      <h1 className="page-title">
        Customer Reviews
      </h1>

      <p className="page-subtitle">
        Review details and sentiment
      </p>


      {/* FILTER */}

      <div className="filter-container">

        {[
          "All",
          "Positive",
          "Neutral",
          "Negative",
        ].map((filter) => (

          <button
            key={filter}
            className={
              selectedFilter === filter
                ? "filter-button active"
                : "filter-button"
            }
            onClick={() =>
              setSelectedFilter(filter)
            }
          >
            {filter}
          </button>

        ))}

      </div>


      {/* REVIEWS */}

      <div className="reviews-page">

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

    </div>
  );
}

export default Reviews;