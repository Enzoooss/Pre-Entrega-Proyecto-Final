import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import passport from "passport";
import authRoutes from "./routes/auth.routes.js";
import viewsRoutes from "./routes/views.routes.js"; 
import cookieParser from "cookie-parser";
import { initializePassport } from "./config/passport.config.js";
import handlebars from "express-handlebars";
import config from "./config/config.js";
import path from "path";

const app = express();
const PORT = 5000;

// Express config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

// Passport config
initializePassport(passport);
app.use(passport.initialize());

// Handlebars config
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(config.DIRNAME, "views", "layouts"),
}));
app.set('view engine', 'hbs');

app.set("views", path.join(config.DIRNAME, "views"));

// Mongoose config
mongoose
    .connect("mongodb://localhost:27017/PreEntregaProyectoFinal")
    .then(() => console.log("Conectado a MongoDB"))
    .catch((error) => console.log("Error al conectar a MongoDB", error.message));

// Routes config
app.use("/api/auth", authRoutes);
app.use("/", viewsRoutes); 
app.use("api/sessions", authRoutes); 

// Start server
app.listen(PORT, () => {
    console.log(`Server corriendo en puerto ${PORT}`);
});
