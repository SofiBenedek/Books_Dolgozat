import Database from "better-sqlite3";

import "express";

const db = new Database();

db.prepare(
    `CREATE DATABASE IF NOT EXIST books(
     id: PRIMARY KEY AUTOINCREMENT,
      title: TEXT,
       author: TEXT,
        year: TEXT) `
).run();


const getBooks;

const putBooks;
const postBooks;


