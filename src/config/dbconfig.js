const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

const client = new Client({
  host:"ec2-52-20-166-21.compute-1.amazonaws.com",
  port:5432,
  user:"uelidlexftruov",
  password:"9dc71fba6ec71f2651e9ec8dbda38b117645abb57ba8fb12f5c056683c799ec6",
  database:"ddu5np2s5p2if4",
  connectionString:"postgres://uelidlexftruov:9dc71fba6ec71f2651e9ec8dbda38b117645abb57ba8fb12f5c056683c799ec6@ec2-52-20-166-21.compute-1.amazonaws.com:5432/ddu5np2s5p2if4",
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect();

module.exports = {
  query: (text, params) => client.query(text, params),
}