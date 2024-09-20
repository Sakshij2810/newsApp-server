import express from "express";
import fetch from "node-fetch"; // You can now use ES6 `import`
import cors from "cors"; // Import CORS

const app = express();
const port = process.env.PORT || 3000;

const API_KEY = "ab023513855a4099964a110a9d57ed46";

// Enable CORS for all requests
app.use(cors());

app.get("/news", async (req, res) => {
  const query = req.query.q || "India";
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    res.json(data); // Send the fetched news data to the frontend
  } catch (error) {
    res.status(500).json({ error: "Error fetching news" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
