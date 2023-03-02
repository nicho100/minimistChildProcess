require("dotenv").config()
const args= require("minimist")(process.argv.slice(2))
//traigo el link de mongo de .env y lo exporto
export const urlMongo=process.env.URL
export const config={
    puerto:args.p??8080
}