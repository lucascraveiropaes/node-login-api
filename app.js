import express      from "express";
import cors         from "cors";
import bodyParser   from "body-parser";
import user         from "./src/routes/user";

const app = express();
const PORT = 5000;

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( cors() );

app.use( user );

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
