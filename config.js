
/** Shared config for application; can be req'd many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "test";

const BCRYPT_WORK_FACTOR = 12;

const PORT = +process.env.PORT || 3001;

const DB_PORT = 5432;
// database is:
//
// - on Heroku, get from env var DATABASE_URL
// - in testing, 'jobly_test'
// - else: 'jobly'

// database username
const databaseUserName = "postgres";

// database user password
const databaseUserPassword = "springboard";

let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "jobly-test";
} else {
  DB_URI  = process.env.DATABASE_URL || 'jobly';
}


// let DB_URI = `postgres://${ databaseUserName }:${ databaseUserPassword }@localhost:${ DB_PORT }/`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI += "jobly_test";
// } else {
//   DB_URI += process.env.DATABASE_URL || "jobly";
// }

module.exports = {
  SECRET_KEY,
  PORT,
  DB_URI,
  BCRYPT_WORK_FACTOR
};



// /*
// /** Shared config for application; can be req'd many places. 


// require("dotenv").config();

// const SECRET = process.env.SECRET_KEY || 'test';

// const PORT = +process.env.PORT || 3001;

// // database is:
// //
// // - on Heroku, get from env var DATABASE_URL
// // - in testing, 'jobly-test'
// // - else: 'jobly'

// let DB_URI;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = "jobly-test";
// } else {
//   DB_URI  = process.env.DATABASE_URL || 'jobly';
// }

// console.log("Using database", DB_URI);

// module.exports = {
//   SECRET,
//   PORT,
//   DB_URI,
// };
// */