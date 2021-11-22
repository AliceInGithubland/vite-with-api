import express from "express";
import path from "path";

const app = express();
const port = 3003;

// API routes
app.get("/api/test", (_request, response) => {
  response.json({ message: "Test from server" });
});

// serve production bundle of app and storybook
app.use(express.static("dist"));

// send all other requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
