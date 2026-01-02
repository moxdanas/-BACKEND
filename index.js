import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
let myusername = process.env.anasname;
let db = process.env.DB_PASSWORD;
console.log("VALUE ", myusername);
console.log(" database ", db);
