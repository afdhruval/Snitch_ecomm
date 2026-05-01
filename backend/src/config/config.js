import "dotenv/config"

if (!process.env.MONGO_URI) {
    throw Error("cannot find the mongo uri")
}

export const config = {
    MONGO_URI: process.env.MONGO_URI
}