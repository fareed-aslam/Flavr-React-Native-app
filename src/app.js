import express from "express";
import morgan from "morgan";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

import favoritesRouter from "./routes/favorite.route.js";

// app.use("/", (req, res) => {
//   res.send("bhai");
// });

app.use("/api/v1", favoritesRouter);
