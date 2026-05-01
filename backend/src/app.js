import "dotenv/config"
import express  from "express"
import morgan from "morgan"
import cookie from "cookie-parser"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cookie())

export default app