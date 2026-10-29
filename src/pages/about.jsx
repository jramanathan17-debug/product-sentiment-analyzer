function About() {

  return (
    <div className="page-container">

      <div className="about-card">

        <h1>
          About the Project
        </h1>

        <p>
          Product Sentiment Analyzer and Review
          Dashboard is a web application designed
          to collect and analyze product reviews.
        </p>

        <p>
          The application helps users understand
          customer opinions through sentiment
          analysis and visual dashboards.
        </p>


        <h2>
          Technologies
        </h2>

        <div className="technology-list">

          <span>
            React.js
          </span>

          <span>
            Recharts
          </span>

          <span>
            Axios
          </span>

          <span>
            Flask / Django
          </span>

          <span>
            Selenium
          </span>

          <span>
            MongoDB / PostgreSQL
          </span>

        </div>


        <h2>
          Main Features
        </h2>

        <ul>

          <li>
            Product Review Collection
          </li>

          <li>
            Sentiment Classification
          </li>

          <li>
            Interactive Dashboard
          </li>

          <li>
            Sentiment Trends
          </li>

          <li>
            Rating Distribution
          </li>

          <li>
            Word Frequency Analysis
          </li>

          <li>
            Customer Review Filtering
          </li>

        </ul>

      </div>

    </div>
  );
}

export default About;