import "dotenv/config"
import express from "express"
import morgan from "morgan"
import cookie from "cookie-parser"
import authRouter from "./routes/auth.route.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cookie())

app.use("/api/auth", authRouter)

export default app