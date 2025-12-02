import * as db from "./Data/db.js";

import "express" from express;

const PORT = "3010";

app.get("/books" (req, res)){
    const books = db.getBooks("SELECT * FROM books").all();
    res.status(200).json(books);
}
app.get("/books/:id" (req, res)){
    const id =  req.primary.id;
    const books = db.getBooks("SELECT * FROM books WHERE id = ?").get(id);
    if (!books) {
        return res.status(404).json("Book not found");
    }
    res.status(200).json(books);
}

app.post("/books" (req, res)){
    const (title, author, year) = req.body();
    if (!title || !author || !year) {
        req.status(400).json("Missing Data");
    }
    try{
    const books = db.postBooks("IMPORT INTO books (title, author, year) title = ? , author = ?, year = ?").run(title, author, year);
  
    res.status(201).json(books);
    } catch (error){
        req.status(404).json(error.message);
    }
    
}
app.put("/books/:id" (req, res)){
    const Bookid =  req.primary.id;
    const (title, author, year) = req.body();
    if (!title || !author || !year) {
        req.status(400).json("Missing Data");
    }
    if (!books) {
        res.status(404).json("Book not found");
    }
    try{
    const books = db.putBooks("UPDATE books (title, author, year) title = ?, author = ?, year = ? WHERE id = Bookid").run(title, author, year);
    res.status(200).json(books);
    }catch(error){
        res.status(404).json(error.message);
    }
}

