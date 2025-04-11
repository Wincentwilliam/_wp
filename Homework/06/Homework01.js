import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("Homework1.DB");

db.query( 'CREATE TABLE IF NOT EXISTS posts ( id INTEGER PRIMARY KEY AUTOINCREMENT,time DATETIME DEFAULT CURRENT_TIMESTAMP,title TEXT, body TEXT)') 

const now = () => new Date().toISOString();

const posts = [
    ["The First Posts", "This is the first body."],
    ["The Second Posts", "This is the second body."],
    ["The Third Posts", "This is the third body."],
];

for (const [title,body] of posts) {
    db.query("INSERT INTO posts (Time, Title, Body) Values (?, ?, ?)",
    [now(), title, body]
    );
}

console.log("3 posts inserted using db.query()");

db.close();