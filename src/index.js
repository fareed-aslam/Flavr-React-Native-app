import { ENV } from "./config/env.js";
import { app } from "./app.js";

// dotenv.config();

const PORT = ENV.PORT;

// app
//   .listen(PORT, () => {
//     console.log(`Sever is running at http://localhost:${PORT}`);
//   })
//   .then(() => {
//     console.log("Database Connected....");
//   })
//   .catch((error) => {
//     console.log("error in connecting db", error);
//   });

// await connectDb()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is running at http:localhost:${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("Error in connecting the database", error);
//   });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
