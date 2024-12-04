import express from "express";
import cors from "cors";
//for the .env file
import dotenv from "dotenv";

const app = express();
const port = 4000;
dotenv.config();
/*app.use(
    cors({
      origin: [
        "http://localhost:4000"//,
        //"https://backend-927c.onrender.com",
        //"https://frontend-9vuf.onrender.com",
      ], // Replace with your frontend's origin
    })
  );*/

app.get("/api", (req, res) => {
  //get the query for the api search
  let input = req.query.input;
  //fetch the data & use the process.env to get the hidden api key
  fetch(
    process.env.REACT_APP_API_LINK_BASE_GEO +
      input +
      "&limit=5&appid=" +
      process.env.REACT_APP_API_KEY,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //send back the data
      res.json(data);
      return { data };
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/weatherCall", (req, res) => {
  //get the lat & lon from the call
  let lon = req.query.lon;
  let lat = req.query.lat;
  //fetch data using the given lat&lon
  //handle response
  fetch(
    process.env.REACT_APP_API_LINK_BASE_WEATHER +
      "lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      process.env.REACT_APP_API_KEY +
      "&units=imperial",
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.json(data);
      return { data };
    })
    .catch((error) => {
      console.log(error);
    });
});

//log that the server is running properly
app.listen(port, () => console.log(`Server running on port ${port}`));
