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

function Dashboard() {

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


  const trendData = [
    {
      date: "Jan 1",
      positive: 40,
      negative: 10,
    },
    {
      date: "Jan 5",
      positive: 55,
      negative: 12,
    },
    {
      date: "Jan 10",
      positive: 48,
      negative: 15,
    },
    {
      date: "Jan 15",
      positive: 65,
      negative: 8,
    },
    {
      date: "Jan 20",
      positive: 72,
      negative: 6,
    },
    {
      date: "Jan 25",
      positive: 80,
      negative: 5,
    },
  ];


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


  return (
    <div className="page-container">

      <h1 className="page-title">
        Product Dashboard
      </h1>

      <p className="page-subtitle">
        Product Review Analysis
      </p>


      {/* STAT CARDS */}

      <div className="dashboard-cards">

        <div className="stat-card">
          <h3>Total Reviews</h3>
          <p>250</p>
        </div>

        <div className="stat-card">
          <h3>Positive</h3>
          <p>70%</p>
        </div>

        <div className="stat-card">
          <h3>Neutral</h3>
          <p>18%</p>
        </div>

        <div className="stat-card">
          <h3>Negative</h3>
          <p>12%</p>
        </div>

      </div>


      {/* SENTIMENT */}

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
                    key={index}
                    fill={COLORS[index]}
                  />
                )
              )}

            </Pie>

            <Tooltip />

          </PieChart>

        </div>

      </div>


      {/* TRENDS */}

      <div className="chart-card large-chart">

        <h2>
          Sentiment Trends
        </h2>

        <div className="chart-scroll">

          <LineChart
            width={800}
            height={350}
            data={trendData}
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
              dataKey="negative"
              stroke="#ef4444"
              strokeWidth={3}
              name="Negative"
            />

          </LineChart>

        </div>

      </div>


      {/* RATING */}

      <div className="chart-card large-chart">

        <h2>
          Rating Distribution
        </h2>

        <div className="chart-scroll">

          <BarChart
            width={800}
            height={350}
            data={ratingData}
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


      {/* WORD FREQUENCY */}

      <div className="chart-card large-chart">

        <h2>
          Most Used Words
        </h2>

        <div className="chart-scroll">

          <BarChart
            width={800}
            height={350}
            data={wordFrequencyData}
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
  );
}

export default Dashboard;