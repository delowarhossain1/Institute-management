import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
}
