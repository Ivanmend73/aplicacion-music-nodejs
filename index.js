const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
//axios
const axios = require('axios');
// routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");


app.use(cors())


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("Base de datos corriendo"))
.catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


//api dezzer
app.get("/api/music", async (req, res) => {
    const { query } = req.query;
    const { data } = await axios.get("https://api.deezer.com/search?q=/");
  
    if (query) {
      const personajesFiltrados = data.filter((personaje) =>
        personaje?.title.toLowerCase().includes(query.toLowerCase())
      );
      res.json({ personajes: personajesFiltrados });
    } else {
      res.json({ personajes: data });
    }
  });
  





app.listen("5000", ()=> 
console.log("Backen puerto 5000 esta corriendo"))

