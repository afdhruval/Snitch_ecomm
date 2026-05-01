import "dotenv/config"

if (!process.env.MONGO_URI) {
    throw Error("cannot find the mongo uri")
}

if(!process.env.JWT_SECRET){
    throw Error("jwt secret is not a generated")
}

export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}