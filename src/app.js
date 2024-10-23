import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);

app.use(express.json({ limit: "16kb" })); //Jab form ya json se data aaye

app.use(express.urlencoded({ extended: true, limit: "16kb" })); //Jab URL se data aayega usko handle karne k liye

app.use(express.static("public")); //static files serve karne k liye

app.use(cookieParser());

export { app };
