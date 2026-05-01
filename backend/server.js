import app from "./src/app.js";
import { mongoConnect } from "./src/config/db.js";


mongoConnect()
app.listen(3000, () => {
    console.log("server is running");
})